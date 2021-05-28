run_docker=docker-compose run --rm app
exec_docker=docker-compose exec app

default: help

help: ## Show this help
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' -e 's/:.*#/ #/'

up:
	docker-compose up -d

down:
	docker-compose down

install:
	$(exec_docker) npm install

clean:
	$(exec_docker) npm run clean

build:
	$(exec_docker) npm run build

start:
	$(exec_docker) npm start

sh:
	$(run_docker) bash

ssh:
	$(exec_docker) bash

kill-server:
	$(exec_docker) adb kill-server

devices:
	$(exec_docker) adb devices