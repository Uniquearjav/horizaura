import { NextRequest, NextResponse } from 'next/server'
import { productsArray } from './all/route'


    export function GET(request){
      // get the query object from the request
      const searchParams = request.nextUrl.searchParams.get('product_id')

      // search the products array for the product with the asin
      const product = productsArray.find(product => product.product_id === searchParams)
      console.log(product)
      return NextResponse.json(product)
    }