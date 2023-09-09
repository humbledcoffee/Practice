interface Book {
    功能性训练: string
    Y3T?: string
    力量训练原理: string
    核心训练原理: string
}
//可以从接口抓取
type subBook = Pick<Book, 'Y3T'>
//也可以从class抓取
class Book2 {
    功能性训练!: string
    Y3T?: string
}
type subBook2 = Pick<Book, '功能性训练'>
