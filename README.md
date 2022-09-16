# Cyclic で Bolt for JavaScript を動かす

https://www.cyclic.sh/

## デプロイ

- [動画](https://www.youtube.com/watch?v=MusIvEKjqsc&t=690s)を参考にデプロイ

- `Overview` > `App URL` をコピー

## イベントの取得

左のサイドバーにある `Event Subscription`

- `Request URL` に、デプロイでコピーした `App URL` の末尾に `/slack/events` を追加したものを入力

  例: `https://コピーしたURL/slack/events`

- `Subscribe to bot events` > `Add Bot User Event` > `message.channels`

## Add OAuth Scope

左のサイドバーにある `OAuth & Permissions`
   - `Bot Token Scopes` > `Add an OAuth Scope` > `chat:write`

## 環境変数

1. 左のサイドバーにある `Basic Information` > `Signing Secret` をコピー

1. 左のサイドバーにある `Installed App` > `Bot User OAuth Token` をコピー

- Cyclic の `Variables`
  - `SLACK_BOT_TOKEN` に 1 の値を入力
  - `SLACK_SIGNING_SECRET` に 2 の値を入力

## ワークスペースへインストール

左のサイドバーにある `Install App`

## slack api

https://api.slack.com/apps

## リアクションした時に反応

Event Subscriptions > Subscribe to events on behalf of users

reaction_added

保存

Install App > Reinstall to Workspace

## 参考にしたページ

https://www.youtube.com/watch?v=MusIvEKjqsc&t=400s

https://github.com/cyclic-software/starter-slack-boltjs

https://api.slack.com/start/building/bolt-js
