compose-down:
	docker compose -f docker-compose.yml -p desafio-2023-dez-19-gabriel down

compose-up:
	docker compose -f docker-compose.yml -p desafio-2023-dez-19-gabriel up -d 

compose-shell:
	make compose-up;

	docker compose -f docker-compose.yml -p desafio-2023-dez-19-gabriel exec -it app-sistema-node bash;