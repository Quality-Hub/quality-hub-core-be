// const stripe = require('../stripe')

// async function createCharge (_, args, { req }) {
//   console.log('turkey bacon', args)

//     const user = await context.prisma.user({ email: args.email });
//     if (!user) {
//       throw new Error("not authenticated")
//     }

//     // This creates the "customer"
//     const customer = await stripe.customers.create({
//         email: user.email,
//         source: args.source,
//     })

//     user.stripeId = (await customer).id

//     const updatedUser = await context.prisma.updateUser({
//         data: {...args, stripeId: user.stripeId},
//         where: {
//           email: user.email
//         }
//       })

//       console.log(args)
//     return updatedUser
// }
  
  
// module.exports = {
//   createCharge,
// }