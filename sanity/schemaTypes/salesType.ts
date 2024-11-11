import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
    name: 'sales',
    title: 'Sales',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'SalesTitle',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'SalesDescription',
            type: 'text',
        }), 
        defineField({
            name: 'image',
            title: 'SalesImage',
            type: 'image',
        }),
        defineField({
            name: 'link',
            title: 'SalesLink',
            type: 'url',
        }),
        defineField({
            name: 'discountAmount',
            title: 'DiscountAmount',
            type: 'number',
            description: 'Discount amount in percentage',
        }),
        defineField({
            name: 'validFrom',
            title: 'ValidFrom',
            type: 'datetime',
        }),
        defineField({
            name: 'validTo',
            title: 'ValidTo',
            type: 'datetime',
        }),
        defineField({
            name: 'couponCode',
            title: 'Coupon Code',
            type: 'string',
        }),
        defineField({
            name: 'isActive',
            title: 'IsActive',
            type: 'boolean',
            description: 'Is the sale active',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            discountAmount: 'discountAmount',
            couponCode: 'couponCode',
            isActive: 'isActive',
        },
        prepare({ title, discountAmount, couponCode, isActive }) {
            const status = isActive ? 'Active' : 'Inactive';
            return {
                title,
                subtitle: `${discountAmount}% off, ${couponCode}, ${status}`,
                icon: TagIcon,
            };
        },
    },
});

