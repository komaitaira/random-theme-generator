# Random Theme Generator for photographer
<img width="1440" alt="スクリーンショット 2022-03-27 17 26 10" src="https://user-images.githubusercontent.com/63830279/160274108-c0d1018a-4c24-4405-a6ef-7dd6ef830357.png">

![giphy](https://user-images.githubusercontent.com/63830279/160273980-6a06c63f-9b89-4973-899f-e7bf64e5aaa9.gif)

## URL
~~https://random-theme-generator.vercel.app/~~

- 2022/11/13現在、API側停止済みのためテーマ生成はできません。クライアント側は動作します。

## About
ある日、会社の先輩からカメラをいただいたが全然撮りに行ったりせず一向にうまくならないので、これは強制力が必要であると察した。

撮影テーマ・撮影期限を決めることで強制的に自分のケツを叩き、撮影に向かわせるためのアプリ。

というのは手前上で、ただ作りたかっただけです🍞

## Libraries
- アプリ内で利用される単語は、日本語ワードネットを使用。

http://compling.hss.ntu.edu.sg/wnja/index.ja.html

## Design
- 要件定義/UI設計 Figma FigJam

## Frontend
- React.js 17.0.2
- TypeScript 4.4.2

## Backend
- FastAPI 0.70.0
- Python 3.8

## Database
- Postgresql

## Infrastructure/Deployment
- Docker
- Vercel
- Heroku

![スクリーンショット 2022-04-18 15 54 26](https://user-images.githubusercontent.com/63830279/163768503-20429d94-acb7-41f9-aa97-ae0a4e4225ab.png)

## Design
雑多ですが、figmaでデザインしてます
https://www.figma.com/file/vYIBxIUX1tzWb1cox6y3QS/%E5%86%99%E7%9C%9F%E3%81%AE%E9%A1%8C%E6%9D%90%E3%82%92%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E3%81%A7%E7%94%9F%E6%88%90%E3%81%97%E3%81%A6%E3%81%8F%E3%82%8C%E3%82%8B%E3%82%A2%E3%83%97%E3%83%AA?node-id=0%3A1
