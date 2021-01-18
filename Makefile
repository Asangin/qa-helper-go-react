build:
	npm run build; \
	CGO_ENABLED=0 go build -ldflags "-w" -a -o build . ; \
	rice append -i . --exec build/qa-helper-go-react
