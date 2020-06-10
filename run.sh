# Run using Docker Compose

### Development

# Start Local Server in Deamon Mode (Builds the Image)
docker-compose up -d --build

# Start Local Server in Deamon Mode
docker-compose up -d

# Stop Local Server
docker-compose stop

### Production

# Start Production Server in Deamon Mode (Builds the Image)
docker-compose -f docker-compose-prod.yml up -d --build

# Start Production Server in Deamon Mode
docker-compose -f docker-compose-prod.yml up -d

# Stop Production Server
docker-compose -f docker-compose-prod.yml stop