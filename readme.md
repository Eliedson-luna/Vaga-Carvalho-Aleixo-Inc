# Welcome to Amazon Finder 👋

This is a WebTool made to search in amazon outside the original website

## How to test!

1. After you download the main branch you're able to configure both directories (FrontEnd, BackeEnd)

2. FrontEnd: The FrontEnd Project initializes a webserver in localhost (or your pc domain) at port 5173, you'll need this info to configure CORS in the BackEnd
   
3. BackEnd: The BackEnd has a configurantion directory in the following path which contains the onfiguration file
   ```bash
   ./src/config/config.json
   ```


4.Here you can customize the server config, if tou running your FontEnd in a different domain than localhost:5173 add the url at the ORIGINS field
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

5.Type the following codes to run the applications

        ```bash 
            npm run host
        ```
        
```bash 
            bun run dev
        ```