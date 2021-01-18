build: react go exec
	
react:
	npm run build

go:
	CGO_ENABLED=0 go build -ldflags "-w" -a -o build .

exec:
	rice append -i . --exec build/qa-helper-go-react

clean:
	rm -rf $(PWD)/build