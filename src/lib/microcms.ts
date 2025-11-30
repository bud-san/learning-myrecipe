import type {
  Recipe,
  Ingredient,
  MicroCMSListResponse
} from '@/types/microcms'

const SERVICE_DOMAIN = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN
const API_KEY = import.meta.env.VITE_MICROCMS_API_KEY
const RECIPES_ENDPOINT = import.meta.env.VITE_MICROCMS_RECIPES_ENDPOINT || 'recipe'
const INGREDIENTS_ENDPOINT =
  import.meta.env.VITE_MICROCMS_INGREDIENTS_ENDPOINT || 'ingredients'

const BASE_URL = `https://${SERVICE_DOMAIN}.microcms.io/api/v1`

interface GetRecipesParams {
  limit?: number
  offset?: number
  orders?: string
  q?: string
  filters?: string
}

export async function getRecipes(
  params: GetRecipesParams = {}
): Promise<MicroCMSListResponse<Recipe>> {
  const { limit = 10, offset = 0, orders, q, filters } = params

  const searchParams = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString()
  })

  if (orders) {
    searchParams.append('orders', orders)
  }
  if (q) {
    searchParams.append('q', q)
  }
  if (filters) {
    searchParams.append('filters', filters)
  }

  const response = await fetch(
    `${BASE_URL}/${RECIPES_ENDPOINT}?${searchParams.toString()}`,
    {
      headers: {
        'X-MICROCMS-API-KEY': API_KEY
      }
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch recipes: ${response.statusText}`)
  }

  return response.json()
}

export async function getRecipe(id: string): Promise<Recipe> {
  // depth=2で参照フィールドを展開（材料の参照も展開される）
  const response = await fetch(`${BASE_URL}/${RECIPES_ENDPOINT}/${id}?depth=2`, {
    headers: {
      'X-MICROCMS-API-KEY': API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch recipe: ${response.statusText}`)
  }

  return response.json()
}

interface GetIngredientsParams {
  limit?: number
  offset?: number
  orders?: string
  q?: string
  filters?: string
}

export async function getIngredients(
  params: GetIngredientsParams = {}
): Promise<MicroCMSListResponse<Ingredient>> {
  const { limit = 10, offset = 0, orders, q, filters } = params

  const searchParams = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString()
  })

  if (orders) {
    searchParams.append('orders', orders)
  }
  if (q) {
    searchParams.append('q', q)
  }
  if (filters) {
    searchParams.append('filters', filters)
  }

  const response = await fetch(
    `${BASE_URL}/${INGREDIENTS_ENDPOINT}?${searchParams.toString()}`,
    {
      headers: {
        'X-MICROCMS-API-KEY': API_KEY
      }
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch ingredients: ${response.statusText}`)
  }

  return response.json()
}
