// このアプリでは数牌しか扱わない
// 字牌も考慮すればもっと汎用的な型定義があると思うが、上記理由からすべての牌は色と数を持つ
export const TILE_COLORS = ['m', 'p', 's'] as const;
export type TileColor = typeof TILE_COLORS[number];

export const ALL_TILE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export type TileNumber = typeof ALL_TILE_NUMBERS[number];

export type Tile = {
  readonly tileColor: TileColor;
  readonly tileNumber: TileNumber;
};
