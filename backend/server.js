const Fastify = require('Fastify');
const cors = require('@fastify/cors');

const dotenv = require('dotenv');
const axios = require('axios');
const UserRepoDTO = require('./UserRepoDTO');

dotenv.config();

const fastify = Fastify({
    logger: true
})

fastify.register(cors, {
    origin: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
});

const BASE_GITAPI_URL = "https://api.github.com/"

//ensure a valid token is stored in the .env file
const access_token = process.env.ACCESS_TOKEN
let response

fastify.get('/api/getRepos/:userName', async function handler(request, reply) {
    await axios.get(`${BASE_GITAPI_URL}users/${request.params.userName}/repos`,
        {
            headers: {
                Authorization: `token ${access_token}`
            }
        })
        .then(response => {
            response = sanitizeResponse(response.data);
            reply.status(200).send(response) 
        })
        .catch(error => {
            let statusCode = error.response.status
            response = {
                status: statusCode,
                msg: error.response.statusText
            }
            reply.status(statusCode).send(response) 
            console.log('Error when fetching from github', error.message)
        });
})

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()

const sanitizeResponse = (data) => {
    let sanitizedData = data.map(item => new UserRepoDTO(item))
    return sanitizedData
}