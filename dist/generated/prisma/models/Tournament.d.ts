import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TournamentModel = runtime.Types.Result.DefaultSelection<Prisma.$TournamentPayload>;
export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null;
    _avg: TournamentAvgAggregateOutputType | null;
    _sum: TournamentSumAggregateOutputType | null;
    _min: TournamentMinAggregateOutputType | null;
    _max: TournamentMaxAggregateOutputType | null;
};
export type TournamentAvgAggregateOutputType = {
    maxScore: number | null;
};
export type TournamentSumAggregateOutputType = {
    maxScore: number | null;
};
export type TournamentMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    format: string | null;
    maxScore: number | null;
    status: string | null;
    startsAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    ownerId: string | null;
};
export type TournamentMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    format: string | null;
    maxScore: number | null;
    status: string | null;
    startsAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    ownerId: string | null;
};
export type TournamentCountAggregateOutputType = {
    id: number;
    name: number;
    format: number;
    maxScore: number;
    status: number;
    startsAt: number;
    createdAt: number;
    updatedAt: number;
    ownerId: number;
    _all: number;
};
export type TournamentAvgAggregateInputType = {
    maxScore?: true;
};
export type TournamentSumAggregateInputType = {
    maxScore?: true;
};
export type TournamentMinAggregateInputType = {
    id?: true;
    name?: true;
    format?: true;
    maxScore?: true;
    status?: true;
    startsAt?: true;
    createdAt?: true;
    updatedAt?: true;
    ownerId?: true;
};
export type TournamentMaxAggregateInputType = {
    id?: true;
    name?: true;
    format?: true;
    maxScore?: true;
    status?: true;
    startsAt?: true;
    createdAt?: true;
    updatedAt?: true;
    ownerId?: true;
};
export type TournamentCountAggregateInputType = {
    id?: true;
    name?: true;
    format?: true;
    maxScore?: true;
    status?: true;
    startsAt?: true;
    createdAt?: true;
    updatedAt?: true;
    ownerId?: true;
    _all?: true;
};
export type TournamentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentWhereInput;
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    cursor?: Prisma.TournamentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TournamentCountAggregateInputType;
    _avg?: TournamentAvgAggregateInputType;
    _sum?: TournamentSumAggregateInputType;
    _min?: TournamentMinAggregateInputType;
    _max?: TournamentMaxAggregateInputType;
};
export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
    [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTournament[P]> : Prisma.GetScalarType<T[P], AggregateTournament[P]>;
};
export type TournamentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentWhereInput;
    orderBy?: Prisma.TournamentOrderByWithAggregationInput | Prisma.TournamentOrderByWithAggregationInput[];
    by: Prisma.TournamentScalarFieldEnum[] | Prisma.TournamentScalarFieldEnum;
    having?: Prisma.TournamentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TournamentCountAggregateInputType | true;
    _avg?: TournamentAvgAggregateInputType;
    _sum?: TournamentSumAggregateInputType;
    _min?: TournamentMinAggregateInputType;
    _max?: TournamentMaxAggregateInputType;
};
export type TournamentGroupByOutputType = {
    id: string;
    name: string;
    format: string;
    maxScore: number;
    status: string;
    startsAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    ownerId: string;
    _count: TournamentCountAggregateOutputType | null;
    _avg: TournamentAvgAggregateOutputType | null;
    _sum: TournamentSumAggregateOutputType | null;
    _min: TournamentMinAggregateOutputType | null;
    _max: TournamentMaxAggregateOutputType | null;
};
type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TournamentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TournamentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TournamentGroupByOutputType[P]>;
}>>;
export type TournamentWhereInput = {
    AND?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    OR?: Prisma.TournamentWhereInput[];
    NOT?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    id?: Prisma.StringFilter<"Tournament"> | string;
    name?: Prisma.StringFilter<"Tournament"> | string;
    format?: Prisma.StringFilter<"Tournament"> | string;
    maxScore?: Prisma.IntFilter<"Tournament"> | number;
    status?: Prisma.StringFilter<"Tournament"> | string;
    startsAt?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    ownerId?: Prisma.StringFilter<"Tournament"> | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    participants?: Prisma.ParticipantListRelationFilter;
    courts?: Prisma.CourtListRelationFilter;
    matches?: Prisma.MatchListRelationFilter;
};
export type TournamentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    owner?: Prisma.UserOrderByWithRelationInput;
    participants?: Prisma.ParticipantOrderByRelationAggregateInput;
    courts?: Prisma.CourtOrderByRelationAggregateInput;
    matches?: Prisma.MatchOrderByRelationAggregateInput;
};
export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    OR?: Prisma.TournamentWhereInput[];
    NOT?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    name?: Prisma.StringFilter<"Tournament"> | string;
    format?: Prisma.StringFilter<"Tournament"> | string;
    maxScore?: Prisma.IntFilter<"Tournament"> | number;
    status?: Prisma.StringFilter<"Tournament"> | string;
    startsAt?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    ownerId?: Prisma.StringFilter<"Tournament"> | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    participants?: Prisma.ParticipantListRelationFilter;
    courts?: Prisma.CourtListRelationFilter;
    matches?: Prisma.MatchListRelationFilter;
}, "id">;
export type TournamentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    _count?: Prisma.TournamentCountOrderByAggregateInput;
    _avg?: Prisma.TournamentAvgOrderByAggregateInput;
    _max?: Prisma.TournamentMaxOrderByAggregateInput;
    _min?: Prisma.TournamentMinOrderByAggregateInput;
    _sum?: Prisma.TournamentSumOrderByAggregateInput;
};
export type TournamentScalarWhereWithAggregatesInput = {
    AND?: Prisma.TournamentScalarWhereWithAggregatesInput | Prisma.TournamentScalarWhereWithAggregatesInput[];
    OR?: Prisma.TournamentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TournamentScalarWhereWithAggregatesInput | Prisma.TournamentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Tournament"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Tournament"> | string;
    format?: Prisma.StringWithAggregatesFilter<"Tournament"> | string;
    maxScore?: Prisma.IntWithAggregatesFilter<"Tournament"> | number;
    status?: Prisma.StringWithAggregatesFilter<"Tournament"> | string;
    startsAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Tournament"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Tournament"> | Date | string;
    ownerId?: Prisma.StringWithAggregatesFilter<"Tournament"> | string;
};
export type TournamentCreateInput = {
    id?: string;
    name: string;
    format: string;
    maxScore: number;
    status?: string;
    startsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    courts?: Prisma.CourtCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateInput = {
    id?: string;
    name: string;
    format: string;
    maxScore: number;
    status?: string;
    startsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownerId: string;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    courts?: Prisma.CourtUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    courts?: Prisma.CourtUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    courts?: Prisma.CourtUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateManyInput = {
    id?: string;
    name: string;
    format: string;
    maxScore: number;
    status?: string;
    startsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownerId: string;
};
export type TournamentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TournamentListRelationFilter = {
    every?: Prisma.TournamentWhereInput;
    some?: Prisma.TournamentWhereInput;
    none?: Prisma.TournamentWhereInput;
};
export type TournamentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TournamentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type TournamentAvgOrderByAggregateInput = {
    maxScore?: Prisma.SortOrder;
};
export type TournamentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type TournamentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type TournamentSumOrderByAggregateInput = {
    maxScore?: Prisma.SortOrder;
};
export type TournamentScalarRelationFilter = {
    is?: Prisma.TournamentWhereInput;
    isNot?: Prisma.TournamentWhereInput;
};
export type TournamentCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutOwnerInput, Prisma.TournamentUncheckedCreateWithoutOwnerInput> | Prisma.TournamentCreateWithoutOwnerInput[] | Prisma.TournamentUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutOwnerInput | Prisma.TournamentCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.TournamentCreateManyOwnerInputEnvelope;
    connect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
};
export type TournamentUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutOwnerInput, Prisma.TournamentUncheckedCreateWithoutOwnerInput> | Prisma.TournamentCreateWithoutOwnerInput[] | Prisma.TournamentUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutOwnerInput | Prisma.TournamentCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.TournamentCreateManyOwnerInputEnvelope;
    connect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
};
export type TournamentUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutOwnerInput, Prisma.TournamentUncheckedCreateWithoutOwnerInput> | Prisma.TournamentCreateWithoutOwnerInput[] | Prisma.TournamentUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutOwnerInput | Prisma.TournamentCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.TournamentUpsertWithWhereUniqueWithoutOwnerInput | Prisma.TournamentUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.TournamentCreateManyOwnerInputEnvelope;
    set?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    disconnect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    delete?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    connect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    update?: Prisma.TournamentUpdateWithWhereUniqueWithoutOwnerInput | Prisma.TournamentUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.TournamentUpdateManyWithWhereWithoutOwnerInput | Prisma.TournamentUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.TournamentScalarWhereInput | Prisma.TournamentScalarWhereInput[];
};
export type TournamentUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutOwnerInput, Prisma.TournamentUncheckedCreateWithoutOwnerInput> | Prisma.TournamentCreateWithoutOwnerInput[] | Prisma.TournamentUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutOwnerInput | Prisma.TournamentCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.TournamentUpsertWithWhereUniqueWithoutOwnerInput | Prisma.TournamentUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.TournamentCreateManyOwnerInputEnvelope;
    set?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    disconnect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    delete?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    connect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    update?: Prisma.TournamentUpdateWithWhereUniqueWithoutOwnerInput | Prisma.TournamentUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.TournamentUpdateManyWithWhereWithoutOwnerInput | Prisma.TournamentUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.TournamentScalarWhereInput | Prisma.TournamentScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TournamentCreateNestedOneWithoutParticipantsInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutParticipantsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutParticipantsInput;
    upsert?: Prisma.TournamentUpsertWithoutParticipantsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutParticipantsInput, Prisma.TournamentUpdateWithoutParticipantsInput>, Prisma.TournamentUncheckedUpdateWithoutParticipantsInput>;
};
export type TournamentCreateNestedOneWithoutCourtsInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutCourtsInput, Prisma.TournamentUncheckedCreateWithoutCourtsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutCourtsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutCourtsNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutCourtsInput, Prisma.TournamentUncheckedCreateWithoutCourtsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutCourtsInput;
    upsert?: Prisma.TournamentUpsertWithoutCourtsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutCourtsInput, Prisma.TournamentUpdateWithoutCourtsInput>, Prisma.TournamentUncheckedUpdateWithoutCourtsInput>;
};
export type TournamentCreateNestedOneWithoutMatchesInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutMatchesInput, Prisma.TournamentUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutMatchesInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutMatchesInput, Prisma.TournamentUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutMatchesInput;
    upsert?: Prisma.TournamentUpsertWithoutMatchesInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutMatchesInput, Prisma.TournamentUpdateWithoutMatchesInput>, Prisma.TournamentUncheckedUpdateWithoutMatchesInput>;
};
export type TournamentCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    format: string;
    maxScore: number;
    status?: string;
    startsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    courts?: Prisma.CourtCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    format: string;
    maxScore: number;
    status?: string;
    startsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    courts?: Prisma.CourtUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutOwnerInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutOwnerInput, Prisma.TournamentUncheckedCreateWithoutOwnerInput>;
};
export type TournamentCreateManyOwnerInputEnvelope = {
    data: Prisma.TournamentCreateManyOwnerInput | Prisma.TournamentCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type TournamentUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.TournamentWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutOwnerInput, Prisma.TournamentUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutOwnerInput, Prisma.TournamentUncheckedCreateWithoutOwnerInput>;
};
export type TournamentUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.TournamentWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutOwnerInput, Prisma.TournamentUncheckedUpdateWithoutOwnerInput>;
};
export type TournamentUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.TournamentScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateManyMutationInput, Prisma.TournamentUncheckedUpdateManyWithoutOwnerInput>;
};
export type TournamentScalarWhereInput = {
    AND?: Prisma.TournamentScalarWhereInput | Prisma.TournamentScalarWhereInput[];
    OR?: Prisma.TournamentScalarWhereInput[];
    NOT?: Prisma.TournamentScalarWhereInput | Prisma.TournamentScalarWhereInput[];
    id?: Prisma.StringFilter<"Tournament"> | string;
    name?: Prisma.StringFilter<"Tournament"> | string;
    format?: Prisma.StringFilter<"Tournament"> | string;
    maxScore?: Prisma.IntFilter<"Tournament"> | number;
    status?: Prisma.StringFilter<"Tournament"> | string;
    startsAt?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    ownerId?: Prisma.StringFilter<"Tournament"> | string;
};
export type TournamentCreateWithoutParticipantsInput = {
    id?: string;
    name: string;
    format: string;
    maxScore: number;
    status?: string;
    startsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    courts?: Prisma.CourtCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutParticipantsInput = {
    id?: string;
    name: string;
    format: string;
    maxScore: number;
    status?: string;
    startsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownerId: string;
    courts?: Prisma.CourtUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutParticipantsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput>;
};
export type TournamentUpsertWithoutParticipantsInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutParticipantsInput, Prisma.TournamentUncheckedUpdateWithoutParticipantsInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutParticipantsInput, Prisma.TournamentUncheckedUpdateWithoutParticipantsInput>;
};
export type TournamentUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    courts?: Prisma.CourtUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    courts?: Prisma.CourtUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateWithoutCourtsInput = {
    id?: string;
    name: string;
    format: string;
    maxScore: number;
    status?: string;
    startsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutCourtsInput = {
    id?: string;
    name: string;
    format: string;
    maxScore: number;
    status?: string;
    startsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownerId: string;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutCourtsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutCourtsInput, Prisma.TournamentUncheckedCreateWithoutCourtsInput>;
};
export type TournamentUpsertWithoutCourtsInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutCourtsInput, Prisma.TournamentUncheckedUpdateWithoutCourtsInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutCourtsInput, Prisma.TournamentUncheckedCreateWithoutCourtsInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutCourtsInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutCourtsInput, Prisma.TournamentUncheckedUpdateWithoutCourtsInput>;
};
export type TournamentUpdateWithoutCourtsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutCourtsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateWithoutMatchesInput = {
    id?: string;
    name: string;
    format: string;
    maxScore: number;
    status?: string;
    startsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    courts?: Prisma.CourtCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutMatchesInput = {
    id?: string;
    name: string;
    format: string;
    maxScore: number;
    status?: string;
    startsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownerId: string;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    courts?: Prisma.CourtUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutMatchesInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutMatchesInput, Prisma.TournamentUncheckedCreateWithoutMatchesInput>;
};
export type TournamentUpsertWithoutMatchesInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutMatchesInput, Prisma.TournamentUncheckedUpdateWithoutMatchesInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutMatchesInput, Prisma.TournamentUncheckedCreateWithoutMatchesInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutMatchesInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutMatchesInput, Prisma.TournamentUncheckedUpdateWithoutMatchesInput>;
};
export type TournamentUpdateWithoutMatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    courts?: Prisma.CourtUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutMatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    courts?: Prisma.CourtUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateManyOwnerInput = {
    id?: string;
    name: string;
    format: string;
    maxScore: number;
    status?: string;
    startsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    courts?: Prisma.CourtUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    courts?: Prisma.CourtUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentCountOutputType = {
    participants: number;
    courts: number;
    matches: number;
};
export type TournamentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participants?: boolean | TournamentCountOutputTypeCountParticipantsArgs;
    courts?: boolean | TournamentCountOutputTypeCountCourtsArgs;
    matches?: boolean | TournamentCountOutputTypeCountMatchesArgs;
};
export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentCountOutputTypeSelect<ExtArgs> | null;
};
export type TournamentCountOutputTypeCountParticipantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParticipantWhereInput;
};
export type TournamentCountOutputTypeCountCourtsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourtWhereInput;
};
export type TournamentCountOutputTypeCountMatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
};
export type TournamentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    format?: boolean;
    maxScore?: boolean;
    status?: boolean;
    startsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    participants?: boolean | Prisma.Tournament$participantsArgs<ExtArgs>;
    courts?: boolean | Prisma.Tournament$courtsArgs<ExtArgs>;
    matches?: boolean | Prisma.Tournament$matchesArgs<ExtArgs>;
    _count?: boolean | Prisma.TournamentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournament"]>;
export type TournamentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    format?: boolean;
    maxScore?: boolean;
    status?: boolean;
    startsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournament"]>;
export type TournamentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    format?: boolean;
    maxScore?: boolean;
    status?: boolean;
    startsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournament"]>;
export type TournamentSelectScalar = {
    id?: boolean;
    name?: boolean;
    format?: boolean;
    maxScore?: boolean;
    status?: boolean;
    startsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ownerId?: boolean;
};
export type TournamentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "format" | "maxScore" | "status" | "startsAt" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["tournament"]>;
export type TournamentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    participants?: boolean | Prisma.Tournament$participantsArgs<ExtArgs>;
    courts?: boolean | Prisma.Tournament$courtsArgs<ExtArgs>;
    matches?: boolean | Prisma.Tournament$matchesArgs<ExtArgs>;
    _count?: boolean | Prisma.TournamentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TournamentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TournamentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tournament";
    objects: {
        owner: Prisma.$UserPayload<ExtArgs>;
        participants: Prisma.$ParticipantPayload<ExtArgs>[];
        courts: Prisma.$CourtPayload<ExtArgs>[];
        matches: Prisma.$MatchPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        format: string;
        maxScore: number;
        status: string;
        startsAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
    }, ExtArgs["result"]["tournament"]>;
    composites: {};
};
export type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TournamentPayload, S>;
export type TournamentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TournamentCountAggregateInputType | true;
};
export interface TournamentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tournament'];
        meta: {
            name: 'Tournament';
        };
    };
    findUnique<T extends TournamentFindUniqueArgs>(args: Prisma.SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TournamentFindFirstArgs>(args?: Prisma.SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TournamentFindManyArgs>(args?: Prisma.SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TournamentCreateArgs>(args: Prisma.SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TournamentCreateManyArgs>(args?: Prisma.SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TournamentDeleteArgs>(args: Prisma.SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TournamentUpdateArgs>(args: Prisma.SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TournamentDeleteManyArgs>(args?: Prisma.SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TournamentUpdateManyArgs>(args: Prisma.SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TournamentUpsertArgs>(args: Prisma.SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TournamentCountArgs>(args?: Prisma.Subset<T, TournamentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TournamentCountAggregateOutputType> : number>;
    aggregate<T extends TournamentAggregateArgs>(args: Prisma.Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>;
    groupBy<T extends TournamentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TournamentGroupByArgs['orderBy'];
    } : {
        orderBy?: TournamentGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TournamentFieldRefs;
}
export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    participants<T extends Prisma.Tournament$participantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    courts<T extends Prisma.Tournament$courtsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$courtsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    matches<T extends Prisma.Tournament$matchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TournamentFieldRefs {
    readonly id: Prisma.FieldRef<"Tournament", 'String'>;
    readonly name: Prisma.FieldRef<"Tournament", 'String'>;
    readonly format: Prisma.FieldRef<"Tournament", 'String'>;
    readonly maxScore: Prisma.FieldRef<"Tournament", 'Int'>;
    readonly status: Prisma.FieldRef<"Tournament", 'String'>;
    readonly startsAt: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly ownerId: Prisma.FieldRef<"Tournament", 'String'>;
}
export type TournamentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where: Prisma.TournamentWhereUniqueInput;
};
export type TournamentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where: Prisma.TournamentWhereUniqueInput;
};
export type TournamentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where?: Prisma.TournamentWhereInput;
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    cursor?: Prisma.TournamentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TournamentScalarFieldEnum | Prisma.TournamentScalarFieldEnum[];
};
export type TournamentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where?: Prisma.TournamentWhereInput;
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    cursor?: Prisma.TournamentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TournamentScalarFieldEnum | Prisma.TournamentScalarFieldEnum[];
};
export type TournamentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where?: Prisma.TournamentWhereInput;
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    cursor?: Prisma.TournamentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TournamentScalarFieldEnum | Prisma.TournamentScalarFieldEnum[];
};
export type TournamentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TournamentCreateInput, Prisma.TournamentUncheckedCreateInput>;
};
export type TournamentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TournamentCreateManyInput | Prisma.TournamentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TournamentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    data: Prisma.TournamentCreateManyInput | Prisma.TournamentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TournamentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TournamentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TournamentUpdateInput, Prisma.TournamentUncheckedUpdateInput>;
    where: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TournamentUpdateManyMutationInput, Prisma.TournamentUncheckedUpdateManyInput>;
    where?: Prisma.TournamentWhereInput;
    limit?: number;
};
export type TournamentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TournamentUpdateManyMutationInput, Prisma.TournamentUncheckedUpdateManyInput>;
    where?: Prisma.TournamentWhereInput;
    limit?: number;
    include?: Prisma.TournamentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TournamentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateInput, Prisma.TournamentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TournamentUpdateInput, Prisma.TournamentUncheckedUpdateInput>;
};
export type TournamentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where: Prisma.TournamentWhereUniqueInput;
};
export type TournamentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentWhereInput;
    limit?: number;
};
export type Tournament$participantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    where?: Prisma.ParticipantWhereInput;
    orderBy?: Prisma.ParticipantOrderByWithRelationInput | Prisma.ParticipantOrderByWithRelationInput[];
    cursor?: Prisma.ParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParticipantScalarFieldEnum | Prisma.ParticipantScalarFieldEnum[];
};
export type Tournament$courtsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourtSelect<ExtArgs> | null;
    omit?: Prisma.CourtOmit<ExtArgs> | null;
    include?: Prisma.CourtInclude<ExtArgs> | null;
    where?: Prisma.CourtWhereInput;
    orderBy?: Prisma.CourtOrderByWithRelationInput | Prisma.CourtOrderByWithRelationInput[];
    cursor?: Prisma.CourtWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourtScalarFieldEnum | Prisma.CourtScalarFieldEnum[];
};
export type Tournament$matchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchScalarFieldEnum | Prisma.MatchScalarFieldEnum[];
};
export type TournamentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
};
export {};
