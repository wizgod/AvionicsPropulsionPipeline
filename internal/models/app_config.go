package models

import (
	set "soarpipeline/pkg/set"
)

type AppConfig struct {
	InProduction   bool
	SigningKey     []byte
	Whitelist      set.HashSet[string]
	Host           string
	Port           string
	AllowedOrigins []string
}
