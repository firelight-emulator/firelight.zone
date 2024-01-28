export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			game_external_links: {
				Row: {
					created_at: string;
					external_id: number;
					external_source_name: Database['public']['Enums']['external_datasource_name'];
					game_id: number;
					id: number;
				};
				Insert: {
					created_at?: string;
					external_id: number;
					external_source_name: Database['public']['Enums']['external_datasource_name'];
					game_id: number;
					id?: number;
				};
				Update: {
					created_at?: string;
					external_id?: number;
					external_source_name?: Database['public']['Enums']['external_datasource_name'];
					game_id?: number;
					id?: number;
				};
				Relationships: [
					{
						foreignKeyName: 'game_external_links_game_id_fkey';
						columns: ['game_id'];
						isOneToOne: false;
						referencedRelation: 'games';
						referencedColumns: ['id'];
					},
				];
			};
			game_releases: {
				Row: {
					created_at: string;
					game_id: number;
					id: number;
					platform_id: number;
				};
				Insert: {
					created_at?: string;
					game_id: number;
					id?: number;
					platform_id: number;
				};
				Update: {
					created_at?: string;
					game_id?: number;
					id?: number;
					platform_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: 'game_releases_game_id_fkey';
						columns: ['game_id'];
						isOneToOne: false;
						referencedRelation: 'games';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'game_releases_platform_id_fkey';
						columns: ['platform_id'];
						isOneToOne: false;
						referencedRelation: 'platforms';
						referencedColumns: ['id'];
					},
				];
			};
			games: {
				Row: {
					created_at: string;
					id: number;
					name: string;
					slug: string;
					sort_key: string;
				};
				Insert: {
					created_at?: string;
					id?: number;
					name: string;
					slug: string;
					sort_key: string;
				};
				Update: {
					created_at?: string;
					id?: number;
					name?: string;
					slug?: string;
					sort_key?: string;
				};
				Relationships: [];
			};
			platforms: {
				Row: {
					created_at: string;
					id: number;
					name: string;
					short_name: string;
					slug: string;
				};
				Insert: {
					created_at?: string;
					id?: number;
					name: string;
					short_name: string;
					slug: string;
				};
				Update: {
					created_at?: string;
					id?: number;
					name?: string;
					short_name?: string;
					slug?: string;
				};
				Relationships: [];
			};
			roms: {
				Row: {
					created_at: string;
					filename: string | null;
					filesize_bytes: number | null;
					game_release_id: number;
					id: number;
					md5: string;
				};
				Insert: {
					created_at?: string;
					filename?: string | null;
					filesize_bytes?: number | null;
					game_release_id: number;
					id?: number;
					md5: string;
				};
				Update: {
					created_at?: string;
					filename?: string | null;
					filesize_bytes?: number | null;
					game_release_id?: number;
					id?: number;
					md5?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'roms_game_release_id_fkey';
						columns: ['game_release_id'];
						isOneToOne: false;
						referencedRelation: 'game_releases';
						referencedColumns: ['id'];
					},
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			external_datasource_name: 'twitch_igdb' | 'nointro';
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (Database['public']['Tables'] & Database['public']['Views'])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
				Database[PublicTableNameOrOptions['schema']]['Views'])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
			Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
				Database['public']['Views'])
		? (Database['public']['Tables'] &
				Database['public']['Views'])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof Database['public']['Tables']
		? Database['public']['Tables'][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof Database['public']['Tables']
		? Database['public']['Tables'][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends keyof Database['public']['Enums'] | { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
		: never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
	: PublicEnumNameOrOptions extends keyof Database['public']['Enums']
		? Database['public']['Enums'][PublicEnumNameOrOptions]
		: never;
