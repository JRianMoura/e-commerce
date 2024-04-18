export default {
  name: 'product',
  title: 'Produtos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome do Produto',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descrição do Produto',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Preço do Produto',
      type: 'number',
    },
    {
      name: 'price_id',
      title: 'Stripe Product Price ID',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Imagens do Produto',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
  ],
}
