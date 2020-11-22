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
  patternTitle: null;
  @Prop()
  diy: boolean;
  @Prop()
  patternCustomize: boolean | null;
  @Prop()
  kitType: string | null;
  @Prop()
  size: string;
  @Prop()
  surface: boolean;
  @Prop()
  exchangePrice: null;
  @Prop()
  exchangeCurrency: null;
  @Prop()
  sourceNotes: string | null;
  @Prop()
  hhaBasePoints: number;
  @Prop()
  hhaCategory: null;
  @Prop()
  interact: string | null;
  @Prop()
  tag: string;
  @Prop()
  outdoor: boolean;
  @Prop()
  speakerType: string | null;
  @Prop()
  lightingType: string | null;
  @Prop()
  catalog: string;
  @Prop()
  versionAdded: string;
  @Prop()
  unlocked: boolean;
  @Prop()
  unlockNotes: string;
  @Prop()
  set: null;
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
  pattern: string | null;
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
