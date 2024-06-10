const zod = require('zod');

const createPayload = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updatePayload = zod.object({
   id: zod.string()
})

module.exports = {
    createPayload: createPayload,
    updatePayload: updatePayload
}

