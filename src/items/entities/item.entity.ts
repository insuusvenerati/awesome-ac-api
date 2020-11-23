import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber } from 'class-validator';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop({ _id: true })
  _id: { $oid: string };

  @Prop()
  sourceSheet: string;
  @Prop()
  name: string;
  @Prop()
  patternTitle: unknown;
  @Prop()
  diy: boolean;
  @Prop()
  patternCustomize: boolean | unknown;
  @Prop()
  kitType: string | unknown;
  @Prop()
  size: string;
  @Prop()
  surface: boolean;
  @Prop()
  exchangePrice: unknown;
  @Prop()
  exchangeCurrency: unknown;
  @Prop()
  sourceNotes: string | unknown;
  @Prop()
  hhaBasePoints: number;
  @Prop()
  hhaCategory: unknown;
  @Prop()
  interact: string | unknown;
  @Prop()
  tag: string;
  @Prop()
  outdoor: boolean;
  @Prop()
  speakerType: string | unknown;
  @Prop()
  lightingType: string | unknown;
  @Prop()
  catalog: string;
  @Prop()
  versionAdded: string;
  @Prop()
  unlocked: boolean;
  @Prop()
  unlockNotes: string;
  @Prop()
  set: unknown;
  @Prop()
  series: string;
  @Prop()
  customizationKitCost: number;
  @Prop()
  variants: Array<Variant>;
}

class Variant {
  image: string;
  variation: string;
  filename: string;
  variantId: string;
  uniqueEntryId: string;
  colors: Array<string>;
  pattern: string | unknown;
  bodyCustomize: boolean;
  bodyTitle: string;
  source: Array<string>;
  @IsNumber()
  internalId: number;
  buy: number;
  sell: number;
  themes: Array<string>;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
