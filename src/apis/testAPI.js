import httpInstance from '@/utils/http'

export default function getCategory () {
  return httpInstance({
        url:'home/category/head'
    })
}