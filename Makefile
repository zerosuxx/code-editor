run_docker=docker-compose run --rm app

install:
	$(run_docker) npm install

clean:
	$(run_docker) npm run clean

build:
	$(run_docker) npm run build

sh:
	$(run_docker) sh