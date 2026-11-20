# AdvJavaScriptEx7: MongoDB

## Before you start

1. Install **Docker Desktop** and start it.
2. Install **MongoDB Compass**.

## Already have `local-mongodb` from another course?

If you already have a container named `local-mongodb`, use that one. In Docker Desktop it's inside a group named after the folder you used in your other course, so search for `local-mongodb` on the Containers page, or run `docker compose ls`.

- **Don't** run `docker compose up -d` in this folder. It would fail, because the name and port are already taken.
- Start the container you have: click **Start** in Docker Desktop, or run `docker start local-mongodb`.
- Everything else is the same. Your other course's data stays where it is; this course uses its own database, `itsd`.

## Docker commands

Start MongoDB the first time from this folder (the one with `docker-compose.yaml`):

```
docker compose up -d
```

After that, use these. They work from any folder, and also for a `local-mongodb` from another course.

| Command | What it does |
| --- | --- |
| `docker ps` | Is it running? Wait until STATUS says `(healthy)`. |
| `docker logs local-mongodb` | Show MongoDB's log, if something's wrong. |
| `docker stop local-mongodb` | Stop MongoDB. Your data is kept. |
| `docker start local-mongodb` | Start it again. |

To delete everything and start over (**this deletes all the data**), run `docker compose down -v` in this folder.

## Connecting with Compass

Connection string:

```
mongodb://admin:YOURPASSWORD@localhost:27017
```

`data/students.json` holds the starting students. Import it into the `students` collection of the `itsd` database.

## Connecting from Node

When you set up the Node project, copy `.env.example` to a new file named `.env`. Don't change anything in it: it has to match the user the compose file created, and everyone in the course uses the same user name and password. `.env` is in `.gitignore`: it never goes to GitHub.
