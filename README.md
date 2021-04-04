# テーブル設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| nickname | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :scores

## scores テーブル

| Column  | Type       | Options                        |
| ------- | ---------- | ------------------------------ |
| point   | integer    | null: false                    |
| user_id | references | null: false, foreign_key: true |

### Association

- has_many :score_words
- has_many :words, through: :score_words

## words テーブル

| Column      | Type   | Options                        |
| ----------- | ------ | ------------------------------ |
| name        | string | null: false, foreign_key: true |
| description | text   | null: false, foreign_key: true |

### Association

- has_many :score_words
- has_many :scores, through: :score_words

## score_words テーブル

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| score_id | references | null: false, foreign_key: true |
| word_id  | references | null: false, foreign_key: true |

### Association

- belongs_to :score
- belongs_to :word