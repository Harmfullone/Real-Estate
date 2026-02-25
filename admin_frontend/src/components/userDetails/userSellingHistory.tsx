import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupOutline() {
  return (
    <ToggleGroup variant="outline" type="single" defaultValue="all" spacing={2}>
      <ToggleGroupItem value="all" className="bg-blue-500" aria-label="Toggle all">
        Sold to Real Bro
      </ToggleGroupItem>
      <ToggleGroupItem value="missed" aria-label="Toggle missed">
        Sold Exclusive Property
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export function UserSellingHistory() {
    return (
        <div>
            <div className="w-full">
                <h1 className="font-medium py-4 px-2 text-xl">Selling History</h1>
                <ToggleGroupOutline />
            </div>
        </div>
    )
}


