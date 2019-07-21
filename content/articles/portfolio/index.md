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
#### コア技術 (React + Gatsby with TypeScript)
サイト制作にあたり、React + [Gatsby](https://www.gatsbyjs.org/) をコア技術として採用した。Reactを採用した理由としては、まず利用者が多いので、ググればいくらでもナレッジが見つかるし、エコシステムも充実している点だ。そうした意味ではVue.jsと比較されることが多いが、個人的にはVue.jsの"ユルさ"よりもReactの"堅さ"のほうに共感する。簡単にコードが書けることより、"間違った"コードを書いた時、間違っているとすぐに気づける方が (自分にとっては) 大事だ。

Reactをベースとした静的サイトジェネレータとしては、Gatsbyのほか、Next.jsやReact staticなど、複数存在する (参考: [9 React Static Site Generators for 2019](https://blog.bitsrc.io/9-react-static-site-generators-for-2019-f54a66e519d2)) 。数ある中でGatsbyを選択した理由は、まず人気があるため資料が多いからで、そしてNext.jsと違い静的サイト生成機能に特化しており、実現したいことにフォーカスできると思ったから。

実際、[チュートリアル](https://www.gatsbyjs.org/tutorial/)を中心にドキュメント読みながら、一週間弱でサイトを作ることができた。Gatsbyは"関心の分離"がうまくできており、ほとんどGatsbyの存在を意識せずに開発を進められた。静的サイト生成に関するコードを書く必要はほとんどなく ([ここだけ](https://github.com/aanrii/portfolio/blob/master/gatsby-node.js)) 、フロント面のデザインとコンテンツそのものの制作にフォーカスして作業できた。
GraphQLが導入されていることから、敷居が高いと思われがちだが、シンプルなサイトを作る分には、GraphQLに対する深い理解は必要とされない。チュートリアル通りやっていればつまずくことはなかった。しかも、`gatsby develop`を実行することで、開発時のプレビューができるほか、同時に[GraphiQL](https://github.com/graphql/graphiql)が起動し、任意のQueryの結果を簡単に確認できるので、直感的に作業を進めることができた。

また、実装の上ではTypeScriptを全面的に使用した。このサイトの構造の単純さ・規模感だと、型チェックの恩恵を得られる機会は少ないかもしれないが、学習目的も含め採用に至った。TypeScriptをGatsbyで利用する上では、以下のサイトを参考にした。

- [Getting started with Typescript on Gatsby](https://medium.com/maxime-heckel/getting-started-with-typescript-on-gatsby-8544b47c1d27)
- [gatsby/examples/using-typescript](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-typescript)

#### コンテンツ管理 (gatsby-source-filesystem + transformer)
[gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)のおかげで、リポジトリ内にコンテンツを置いておけばGraphQLでそれを利用することができる。また、[gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)など、各種transformerプラグインを導入することで、ビルド時にHTMLコードを生成し、それをサイトに埋め込むことが可能となる。パース処理等を自分で書くことなく、コンテンツの"情報"と"表現"を完全に分離して管理する仕組みが、すでに用意されている。上記プラグインの利用し、記事の内容は全てMarkdownで書いている。

#### デザイン, スタイリング (Typography.js, emotion)
そもそも自分はデザイン全般に関して技術的にもセンス的にも自信がない。だから、リッチなものを目指すと絶対失敗すると考え、キャラクターベースにした。その際、以下のサイトを参考にした。

- https://ssig33.com/
- https://christine.website/

さて、Gatsbyでは[Typography.js](https://kyleamathews.github.io/typography.js/)を用いたスタイリング方法が[紹介されている](https://www.gatsbyjs.org/docs/typography-js/)。これを踏襲して、全体的なフォント設定を行った (ほぼデフォルトのままだが)。これだけでも幾分マシな見た目になる。

また、全体のレイアウトには、こちらもGatsbyのチュートリアルで紹介されている[Emotion](https://emotion.sh/docs/introduction)を使った。ComponentのpropsのようにCSSプロパティを書けるので、直感的にスタイリングができる。

#### コンテンツ配信 (Netlify)

コンテンツ配信には[Netlify](https://www.netlify.com/)を使った。Gatsbyと連携する上で特別な設定は一切必要なく、GitHubのリポジトリURLを貼るだけで簡単にサイトを公開できた。カスタムドメインの使用に際しては、以下のページを参照した (主にxdomainユーザ向け)。
- [Netlifyで独自ドメインを設定する](https://www.ravness.com/2018/07/netlifydomain/)

### 所感
Gatsby + Netlifyのタッグにより、簡単に静的Webサイトを作って公開することができた。独自ドメイン料以外すべて無料というのもすごいポイントだと思う。

### 課題
とにかくWebサイトを完成させることに全振りしたため、デザインはかなり簡素にした（ページ上の情報量を下げればその分実装量も減る）。ここはデザイナーの人にお金払ってでもイイ感じのものを作りたいなあとは思っている。

また、contactページが非常に簡素なので、NetlifyのForms機能を使って連絡フォームを実装するなどしたい。
