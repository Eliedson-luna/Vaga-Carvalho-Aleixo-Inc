# BackEnd

### Configuration Steps

1. Install dependencies:

```bash
bun install
```

2. If tou running your FontEnd in a different domain than localhost:5173 add the url at the CORS.ORIGINS field: 
>>the config file is located at "src/config/config.json"
   ```bash
    {
    "SERVER": {
        "PORT": 3000
    },
    "CORS": {
        "ORIGINS": [
            "http://localhost:5173",
            "http://10.0.0.199:5173",
            "http://10.0.0.199:4173"
        ],
        "METHODS": [
            "GET",
            "POST"
        ],
        "HEADERS": [
            "Content-Type",
            "Authorization"
        ]
    }
}
   ```

3. run the project:

```bash
bun run start
```





This project was created using `bun init` in bun v1.2.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
