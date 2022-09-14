
import  Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_SK_STRIPE!, {
  apiVersion: '2022-08-01'
});

export default async function handler(req:any, res:any) {
    if (req.method === 'POST') {
      console.log(req.body,'from stripe next api')
      try {
        const params:any = {
          mode: 'payment',
          submit_type:'pay',
          payment_method_type:['card'],
          
          line_items: req.body.map((item:any)=>{
            console.log('lol,,,,,',item.product.name)
       const img:any = item.product.image[0].asset._ref
       const newImage:any = img.replace('image-','https://cdn.sanity.io/images/p94p5eo9/production/').replace('-webp','.webp')
      return {
        price_data :{
          currency:'usd',
          product_data:{
name:item.product.name,
images:[newImage]
          },
          unit_amount:item.product.price *100
        },
        adjustable_quantity:{
enabled:true,
minimum:1
        },
        quantity:item.item
      }
       
          }),
         
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
        }
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create(params);
        res.status(200).json(session)
      } catch (err:any) {
        console.log(err.message,'from stripe.ts catch block')
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }