package main

import (
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// Enable CORS for React frontend (localhost:3000)
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"}
	config.AllowMethods = []string{"GET", "POST", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type"}

	router.Use(cors.New(config))

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "pong"})
	})

	router.POST("/login", func(c *gin.Context) {
		var creds struct {
			Email    string `json:"email"`
			Password string `json:"password"`
		}
		c.BindJSON(&creds)

		correctEmail := os.Getenv("LOGIN_EMAIL")
		correctPassword := os.Getenv("LOGIN_PASSWORD")

		if creds.Email == correctEmail && creds.Password == correctPassword {
			c.JSON(200, gin.H{"success": true})
		} else {
			c.JSON(401, gin.H{"success": false})
		}
	})

	router.Run(":8080")
}
