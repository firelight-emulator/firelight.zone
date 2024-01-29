export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      game_external_links: {
        Row: {
          created_at: string
          external_id: number
          external_source_name: Database["public"]["Enums"]["external_datasource_name"]
          game_id: number
          id: number
        }
        Insert: {
          created_at?: string
          external_id: number
          external_source_name: Database["public"]["Enums"]["external_datasource_name"]
          game_id: number
          id?: number
        }
        Update: {
          created_at?: string
          external_id?: number
          external_source_name?: Database["public"]["Enums"]["external_datasource_name"]
          game_id?: number
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "game_external_links_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          }
        ]
      }
      game_release_external_links: {
        Row: {
          created_at: string
          external_id: number
          external_source_name: Database["public"]["Enums"]["external_datasource_name"]
          game_release_id: number
          id: number
        }
        Insert: {
          created_at?: string
          external_id: number
          external_source_name: Database["public"]["Enums"]["external_datasource_name"]
          game_release_id: number
          id?: number
        }
        Update: {
          created_at?: string
          external_id?: number
          external_source_name?: Database["public"]["Enums"]["external_datasource_name"]
          game_release_id?: number
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "game_release_external_links_game_release_id_fkey"
            columns: ["game_release_id"]
            isOneToOne: false
            referencedRelation: "game_releases"
            referencedColumns: ["id"]
          }
        ]
      }
      game_releases: {
        Row: {
          created_at: string
          game_id: number
          id: number
          platform_id: number
          region_id: number | null
          release_date: string | null
        }
        Insert: {
          created_at?: string
          game_id: number
          id?: number
          platform_id: number
          region_id?: number | null
          release_date?: string | null
        }
        Update: {
          created_at?: string
          game_id?: number
          id?: number
          platform_id?: number
          region_id?: number | null
          release_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "game_releases_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "game_releases_platform_id_fkey"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platforms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "game_releases_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "regions"
            referencedColumns: ["id"]
          }
        ]
      }
      games: {
        Row: {
          created_at: string
          id: number
          name: string
          slug: string
          sort_key: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          slug: string
          sort_key: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          slug?: string
          sort_key?: string
        }
        Relationships: []
      }
      hacks: {
        Row: {
          created_at: string
          description: string
          game_id: number
          id: number
          name: string
          short_description: string
        }
        Insert: {
          created_at?: string
          description: string
          game_id: number
          id?: number
          name: string
          short_description: string
        }
        Update: {
          created_at?: string
          description?: string
          game_id?: number
          id?: number
          name?: string
          short_description?: string
        }
        Relationships: [
          {
            foreignKeyName: "hacks_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          }
        ]
      }
      platforms: {
        Row: {
          created_at: string
          id: number
          name: string
          short_name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          short_name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          short_name?: string
          slug?: string
        }
        Relationships: []
      }
      regions: {
        Row: {
          created_at: string
          id: number
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          slug?: string
        }
        Relationships: []
      }
      rom_external_links: {
        Row: {
          created_at: string
          external_id: number
          external_source_name: Database["public"]["Enums"]["external_datasource_name"]
          id: number
          rom_id: number
        }
        Insert: {
          created_at?: string
          external_id: number
          external_source_name: Database["public"]["Enums"]["external_datasource_name"]
          id?: number
          rom_id: number
        }
        Update: {
          created_at?: string
          external_id?: number
          external_source_name?: Database["public"]["Enums"]["external_datasource_name"]
          id?: number
          rom_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "rom_external_links_rom_id_fkey"
            columns: ["rom_id"]
            isOneToOne: false
            referencedRelation: "roms"
            referencedColumns: ["id"]
          }
        ]
      }
      roms: {
        Row: {
          created_at: string
          filename: string | null
          filesize_bytes: number | null
          game_release_id: number
          id: number
          md5: string
        }
        Insert: {
          created_at?: string
          filename?: string | null
          filesize_bytes?: number | null
          game_release_id: number
          id?: number
          md5: string
        }
        Update: {
          created_at?: string
          filename?: string | null
          filesize_bytes?: number | null
          game_release_id?: number
          id?: number
          md5?: string
        }
        Relationships: [
          {
            foreignKeyName: "roms_game_release_id_fkey"
            columns: ["game_release_id"]
            isOneToOne: false
            referencedRelation: "game_releases"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      external_datasource_name: "twitch_igdb" | "nointro" | "thegamesdb"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

