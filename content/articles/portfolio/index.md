---
title: "portfolio (this site)"
date: "2019-07-20"
---

ポートフォリオサイト (このサイト) を作った。  
コードは[GitHub](https://github.com/aanrii/portfolio)で公開している。

### 動機
業務ではほぼバックエンド開発にのみ携わっているが、フロントエンド技術、とりわけ静的サイト生成技術に興味があり、独習を進めていた。  
また、以前よりポートフォリオを制作したいと思っており、前述の技術との相性が良いと考え、制作を決意した。

### 技術
#### 基盤技術 (React + Gatsby with TypeScript)
サイト制作にあたり、React + [Gatsby](https://www.gatsbyjs.org/) を構築基盤として採用した。Reactを採用した理由としては、まず利用者が多くナレッジが豊富で、エコシステムも充実している点だ。Vue.jsと比較されることが多いが、個人的にはVue.jsの"ユルさ"よりもReactの"堅さ"のほうに共感する。

Reactをベースとした静的サイトジェネレータとしては、Gatsbyのほか、Next.jsやReact staticなど、複数存在する (参考: [9 React Static Site Generators for 2019](https://blog.bitsrc.io/9-react-static-site-generators-for-2019-f54a66e519d2)) 。数ある中でGatsbyを選択した理由は、まず人気があるため資料豊富で、そしてNext.jsと違い静的サイト生成機能に特化しており、より目的にフォーカスできると思ったからだ。

実際、[チュートリアル](https://www.gatsbyjs.org/tutorial/)を中心にいくつかのドキュメント読みながら、一週間弱でサイトを作ることができた。Gatsbyは"関心の分離"がうまくできており、ほとんどFWの存在を意識せずに開発を進められた。静的サイト生成に関するコードを書く必要はほとんどなく ([ここだけ](https://github.com/aanrii/portfolio/blob/master/gatsby-node.js)) 、フロント面のデザインとコンテンツそのものの制作にフォーカスして作業できた。

Gatsbyではデータ取得にGraphQLが用いられていることから、敷居が高いと見られることがあるようだ。しかし、シンプルなサイトを作る分には、GraphQLに対する深い理解は必要とされない。チュートリアル通りやっていればつまずくことはなかった。しかも、`gatsby develop`を実行することで、サイトのプレビューができるほか、同時に[GraphiQL](https://github.com/graphql/graphiql)が起動するため、任意のQueryの結果を簡単に確認できる。直感的なデータ参照ができ、理解が捗った。

また、実装の上ではTypeScriptを全面的に使用した。このサイトの構造の単純さ・規模感だと、型チェックの恩恵を得られる機会は少ないかもしれないが、学習目的も込みで採用に至った。TypeScriptをGatsbyプロジェクトに導入するために、以下のサイトを参考にした。

- [Getting started with Typescript on Gatsby](https://medium.com/maxime-heckel/getting-started-with-typescript-on-gatsby-8544b47c1d27)
- [gatsby/examples/using-typescript](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-typescript)

#### コンテンツ管理 (gatsby-source-filesystem + transformer)
[gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)を利用すると、リポジトリ内にコンテンツを置いておけばGatsbyがそれらを読み込んでくれて、GraphQL経由で利用することができる。また、[gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)など、各種transformerプラグインを導入することで、Markdownで記述した記事ファイルを配置しておくだけで、Gatsbyがビルド時にそれらを読み込み、HTMLコードを生成してくれる。それらは任意の形でサイトに埋め込むことが可能だ。このように、煩雑な処理を自分で実装することなく、コンテンツの"データ"と"表現"を分離して管理する仕組みが、Gatsbyには用意されている。

#### デザイン, スタイリング (Typography.js, emotion)
自分はデザイン全般に関して技術的にもセンス的にも自信がないのでリッチなものを目指すと絶対失敗すると考えた。そこで、画面を全てキャラクターベースにした。ちなみに、以下のサイトなどを参考にした。

- https://ssig33.com/
- https://christine.website/

さて、Gatsbyでは[Typography.js](https://kyleamathews.github.io/typography.js/)を用いたスタイリング方法が[紹介されている](https://www.gatsbyjs.org/docs/typography-js/)。これを踏襲して、このサイトの全体的なフォント設定を行った (ほぼデフォルトのままだが、これだけでも幾分マシな見た目になる) 。

また、全体のレイアウトには、こちらも公式で紹介されている[Emotion](https://emotion.sh/docs/introduction)を使った。ComponentのpropsのようにCSSプロパティを書けるので、直感的にスタイリングができる。

#### コンテンツ配信 (Netlify)

コンテンツ配信には[Netlify](https://www.netlify.com/)を使った。Gatsbyと連携する上で特別な設定は一切必要なく、GitHubのリポジトリURLを貼るだけで簡単にサイトを公開できた。カスタムドメインの使用に際しては、以下のページを参照した (主にxdomainユーザ向け)。
- [Netlifyで独自ドメインを設定する](https://www.ravness.com/2018/07/netlifydomain/)

### 所感
Gatsby + Netlifyのタッグにより、簡単に静的Webサイトを作って公開することができた。ちなみに、独自ドメイン以外すべて無料である。

### 課題
とにかくWebサイトを完成させることに全振りしたため、デザインはかなり簡素にした（ページ上の情報量を下げればその分実装量も減る）。が、将来的にはプロにデザインを頼んで、イイ感じにしたいとは思っている。

あとは、worksページで記事のタグ絞り機能を作りたい (エンジニアリングの記事だけリスト表示するとか) 。これに関しては、GraphQLのクエリを工夫すれば実現するではないだろうか。そのうち試す。