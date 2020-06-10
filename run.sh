# Run using Docker Compose

### Development

# Start Local Server in Deamon Mode (Builds the Image)
docker-compose up -d --build

# Stop Local Server
docker-compose stop

### Production

# Start Production Server in Deamon Mode (Builds the Image)
docker-compose -f docker-compose-prod.yml up -d --build

# Stop Production Server
docker-compose -f docker-compose-prod.yml stop