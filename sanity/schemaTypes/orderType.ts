import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const orderType = defineType({
    name: 'order',
    title: 'Orders',
    type: 'document',
    icon: BasketIcon,
    fields: [
        defineField({
            name: "orderNumber",
            title: "Order Number",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:"stripeCheckoutSessionId",
            title:"Stripe Checkout Session ID",
            type:"string",
        }),
        defineField({
            name:"stripeCustomerId",
            title:"Stripe Customer ID",
            type:"string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:"email",
            title:"Customer Email",
            type:"string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:"clerkUserId",
            title:"Clerk User ID",
            type:"string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:"customerName",
            title:"Customer Name",
            type:"string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "stripePaymentIntentId",
            title: "Stripe Payment Intent ID",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "products",
            title: "Products",
            type: "array",
            of: [
                defineArrayMember({
                    type: "object",
                    fields: [
                        defineField({
                            name: "product",
                            title: "Product Bought",
                            type: "reference",
                            to: [{type: "product"}],
                        }),
                        defineField({
                            name: "quantity",
                            title: "Quantity Purchased",
                            type: "number",
                        }),
                    ],
                    preview: {
                        select: {
                            product: "product.title",
                            quantity: "quantity",
                            image: "product.image",
                            price: "product.price",
                            currency: "product.currency",
                        },
                        prepare({product, quantity, image, price, currency}) {
                            return {
                                title: `${quantity} x ${product}`,
                                subtitle: `${price} ${currency}`,
                                media: image,
                            };
                        },
                    },
                }),
            ],
        }),
        defineField({
            name: "totalPrice",
            title: "Total Price",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "status",
            title: "Order Status",
            type: "string",
            options:{
                list: [
                    {title: "pending", value:"pending" },
                    {title: "processing", value: "processing"},
                    {title: "delivered", value: "delivered"},
                    {title: "cancelled", value: "cancelled"},
                    {title: "shipped", value: "shipped"},
                    {title: "refunded", value: "refunded"},
                ],
            },
        }),
        defineField({
            name: "orderDate",
            title: "Order Date",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
        
        
        defineField({
            name: 'currency',
            title: 'Currency',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "amountDiscounted",
            title: "Amount Discounted",
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),
    ],
    preview: {
        select: {
            name: "customerName",
            email: "email",
            status: "status",   
            amount: "totalPrice",
            currency: "currency",
            orderId: "orderNumber", 
        },
        prepare({ name, email, status, amount, currency, orderId }) {
            const orderIdSnippet = `${orderId.slice(0, 5)}....${orderId.slice(-5)}`;
            return {
                title: `${name} (${orderIdSnippet})`,
                subtitle: `${status} - ${amount} ${currency} - ${email}`,
                media: BasketIcon,
            };
        },
    },
}); 