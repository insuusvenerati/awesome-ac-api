import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VillagerDocument = Villager & Document;

@Schema()
export class Villager {
  @Prop()
  _id: string;

  @Prop()
  sourceSheet: string;
  @Prop()
  name: string;
  @Prop()
  iconImage: string;
  @Prop()
  photoImage: string;
  @Prop()
  houseImage: string;
  @Prop()
  species: string;
  @Prop()
  gender: string;
  @Prop()
  personality: string;
  @Prop()
  subtype: string;
  @Prop()
  hobby: string;
  @Prop()
  birthday: string;
  @Prop()
  catchphrase: string;
  @Prop()
  favoriteSong: string;
  @Prop()
  favoriteSaying: string;
  @Prop()
  defaultClothing: number;
  @Prop()
  defaultUmbrella: string;
  @Prop()
  wallpaper: string;
  @Prop()
  flooring: string;
  @Prop()
  furnitureList: string;
  @Prop()
  furnitureNameList: string;
  @Prop()
  nameColor: string;
  @Prop()
  bubbleColor: string;
  @Prop()
  filename: string;
  @Prop()
  uniqueEntryId: string;
  @Prop()
  colors: Array<string>;
  @Prop()
  styles: Array<string>;
}

export const VillagerSchema = SchemaFactory.createForClass(Villager);
