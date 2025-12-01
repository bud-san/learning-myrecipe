export interface Ingredient {
  id: string
  name?: string
  title?: string
  category?: string
  description?: string
}

export interface IngredientItem {
  ingredient?: Ingredient | { id: string } | { name: string } | { title: string }
  ingredients?: Ingredient | { id: string } | { name: string } | { title: string }
  quantity?: string
  parts?: string
  group?: string | number
}

export interface IngredientGroup {
  ingredients?: IngredientItem[]
  group?: string | number
}

export interface RecipeStep {
  description?: string
  timer?: number
  group?: string | number
}

export interface Recipe {
  id: string
  title: string
  description?: string
  cooking?: string[]
  cookingMethods?: string[]
  servings?: string
  steps?: RecipeStep[]
  ingredients?: IngredientItem[]
  requiredIngredients?: IngredientGroup[]
  report?: string
  ai?: string
  publishedAt?: string
  createdAt?: string
  updatedAt?: string
  revisedAt?: string
}

export interface MicroCMSListResponse<T> {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}
