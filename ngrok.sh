# Build Instruction for NgRok
# Run http-server an ngrok in two separate shell

# This should be the latest project
ng build w3-github-app

# Run a local server using http-server
http-server dist/example -p 4201

# Run ngrok on port 4201
ngrok http 4201