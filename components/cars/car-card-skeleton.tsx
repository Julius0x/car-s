import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface CarCardSkeletonProps {
  count?: number
}

export function CarCardSkeleton({ count = 6 }: CarCardSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <Skeleton className="aspect-video w-full" />
          <CardContent className="p-4">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <div className="flex justify-between mb-3">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-4 w-24" />
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Skeleton className="h-8 w-24" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
