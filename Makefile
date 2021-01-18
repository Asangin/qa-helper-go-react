BUILD_DIR=build
GO_MAIN=cmd/qa-helper/qa-helper-go-react.go
PROJECT_NAME=qa-helper-go-react

build: react go exec
	
react:
	npm run build

go:
	CGO_ENABLED=0 go $(BUILD_DIR) -ldflags "-w" -a -o build $(GO_MAIN)

exec:
	rice append -i $(GO_MAIN) --exec $(BUILD_DIR)/$(PROJECT_NAME)

run.go.main:
	go run $(GO_MAIN)

clean:
	rm -rf $(PWD)/$(BUILD_DIR)

