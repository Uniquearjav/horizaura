"use client";
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import products from "@/app/product.json"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select"
import {
Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/redux/features/cart/cartSlice';

export default function StorePage() {
    const dispatch = useDispatch();
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [sortBy, setSortBy] = useState("featured")
    const [currentCategory, setCurrentCategory] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 12
    const router = useRouter()

    // Get unique categories from products
    const categories = ["all", ...new Set(products.map(product => product.category))]

    useEffect(() => {
        let result = [...products]
        
        // Filter by category
        if (currentCategory !== "all") {
            result = result.filter(product => product.category === currentCategory)
        }
        
        // Filter by search query
        if (searchQuery) {
            result = result.filter(product => 
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }
        
        // Sort products
        switch (sortBy) {
            case "price-asc":
                result.sort((a, b) => a.price - b.price)
                break
            case "price-desc":
                result.sort((a, b) => b.price - a.price)
                break
            case "name-asc":
                result.sort((a, b) => a.name.localeCompare(b.name))
                break
            case "name-desc":
                result.sort((a, b) => b.name.localeCompare(a.name))
                break
            default:
                // Featured or default sorting
                break
        }
        
        setFilteredProducts(result)
    }, [searchQuery, sortBy, currentCategory])

    // Calculate pagination
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

    function handleProductClick(productId) {
        router.push(`/store/${productId}`)
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
        }));
    };

    return (
        <section className="container px-4 py-8 mx-auto">
            <h1 className="text-3xl font-bold mb-6">Store</h1>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="w-full sm:w-1/3">
                    <Input
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                    />
                </div>
                
                <div className="w-full sm:w-1/3">
                    <Select value={currentCategory} onValueChange={setCurrentCategory}>
                        <SelectTrigger>
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                
                <div className="w-full sm:w-1/3">
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger>
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="featured">Featured</SelectItem>
                            <SelectItem value="price-asc">Price: Low to High</SelectItem>
                            <SelectItem value="price-desc">Price: High to Low</SelectItem>
                            <SelectItem value="name-asc">Name: A to Z</SelectItem>
                            <SelectItem value="name-desc">Name: Z to A</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            
            {currentProducts.length === 0 ? (
                <div className="text-center py-12">
                    <h2 className="text-xl">No products found</h2>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {currentProducts.map((product) => (
                            <Card key={product.id} className="overflow-hidden">
                                <div className="aspect-square relative">
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-all hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <CardHeader className="p-4">
                                    <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 pt-0">
                                    <p className="font-medium text-lg">${product.price.toFixed(2)}</p>
                                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">{product.description}</p>
                                </CardContent>
                                <CardFooter className="p-4 flex gap-2">
                                    <Button 
                                        variant="default" 
                                        className="w-full"
                                        onClick={() => handleProductClick(product.id)}
                                    >
                                        View Details
                                    </Button>
                                    <Button 
                                        variant="outline" 
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to Cart
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    
                    <Pagination className="mt-8">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                                    }}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>
                            
                            {[...Array(totalPages)].map((_, i) => (
                                <PaginationItem key={i}>
                                    <PaginationLink
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentPage(i + 1);
                                        }}
                                        isActive={currentPage === i + 1}
                                    >
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            
                            <PaginationItem>
                                <PaginationNext 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                                    }}
                                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </>
            )}
        </section>
    )
}