export function signIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                user: {
                    name: "Fabio teste",
                    email: "fabio@uniaraxa.edu"
                },
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxlb25hcmRvQHVuaWFyYXhhLmNvbSIsInNlbmhhIjoiMTIzNTk3IiwiaWF0IjoxNjgwMDAwMTAyLCJleHAiOjE2ODAwMDM3MDJ9.waN_Rlg_ww-KV0C5GDi7Dg2GsrPehk745kJQ4kAmhZY"
            });
        }, 2000);
    });
}