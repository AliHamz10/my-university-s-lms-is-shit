.PHONY: help install dev build start test lint format clean docker-up docker-down docker-clean

# Default target
help:
	@echo "Available commands:"
	@echo "  install     - Install all dependencies"
	@echo "  dev         - Start development servers"
	@echo "  build       - Build for production"
	@echo "  start       - Start production server"
	@echo "  test        - Run tests"
	@echo "  lint        - Run linting"
	@echo "  format      - Format code"
	@echo "  clean       - Clean node_modules and build files"
	@echo "  docker-up   - Start Docker services"
	@echo "  docker-down - Stop Docker services"
	@echo "  docker-clean- Remove Docker containers and volumes"

# Install dependencies
install:
	@echo "Installing root dependencies..."
	npm install
	@echo "Installing client dependencies..."
	cd client && npm install
	@echo "Installing server dependencies..."
	cd server && npm install
	@echo "All dependencies installed!"

# Start development servers
dev:
	@echo "Starting development servers..."
	npm run dev

# Build for production
build:
	@echo "Building for production..."
	npm run build

# Start production server
start:
	@echo "Starting production server..."
	npm start

# Run tests
test:
	@echo "Running tests..."
	npm test

# Run linting
lint:
	@echo "Running linting..."
	npm run lint

# Format code
format:
	@echo "Formatting code..."
	npm run format

# Clean build files and node_modules
clean:
	@echo "Cleaning build files and node_modules..."
	rm -rf node_modules
	rm -rf client/node_modules
	rm -rf server/node_modules
	rm -rf client/build
	rm -rf client/dist
	rm -rf server/dist
	@echo "Cleanup complete!"

# Docker commands
docker-up:
	@echo "Starting Docker services..."
	docker-compose up -d

docker-down:
	@echo "Stopping Docker services..."
	docker-compose down

docker-clean:
	@echo "Cleaning Docker containers and volumes..."
	docker-compose down -v --remove-orphans
	docker system prune -f

# Database commands
db-seed:
	@echo "Seeding database..."
	cd server && npm run seed

db-reset:
	@echo "Resetting database..."
	cd server && npm run db:reset

# Utility commands
logs:
	@echo "Showing logs..."
	docker-compose logs -f

status:
	@echo "Service status:"
	docker-compose ps

# Quick setup for new developers
setup:
	@echo "Setting up development environment..."
	@make install
	@make docker-up
	@echo "Setup complete! Run 'make dev' to start development servers."
