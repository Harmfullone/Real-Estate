import { Request, Response } from "express";

export async function getPropertyCategories(req: Request, res: Response) {
    try {
        const categories = [
            {
                category: "RESIDENTIAL",
                types: [
                    "Apartment / Flat",
                    "Independent House / Villa",
                    "Plot / Land",
                    "Farmhouse"
                ]
            },
            {
                category: "COMMERCIAL",
                types: [
                    "Office Space",
                    "Shop / Showroom",
                    "Commercial Plot / Land",
                    "Warehouse / Godown"
                ]
            },
            {
                category: "AGRICULTURAL",
                types: [
                    "Agricultural / Farm Land"
                ]
            }
        ];

        return res.status(200).json({
            success: true,
            data: categories
        });
    } catch (error: any) {
        console.error("Get property categories error:", error);
        return res.status(500).json({
            success: false,
            error: "Failed to fetch property categories"
        });
    }
}
