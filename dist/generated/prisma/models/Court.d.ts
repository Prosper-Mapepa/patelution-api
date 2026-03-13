import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CourtModel = runtime.Types.Result.DefaultSelection<Prisma.$CourtPayload>;
export type AggregateCourt = {
    _count: CourtCountAggregateOutputType | null;
    _min: CourtMinAggregateOutputType | null;
    _max: CourtMaxAggregateOutputType | null;
};
export type CourtMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    tournamentId: string | null;
};
export type CourtMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    tournamentId: string | null;
};
export type CourtCountAggregateOutputType = {
    id: number;
    name: number;
    tournamentId: number;
    _all: number;
};
export type CourtMinAggregateInputType = {
    id?: true;
    name?: true;
    tournamentId?: true;
};
export type CourtMaxAggregateInputType = {
    id?: true;
    name?: true;
    tournamentId?: true;
};
export type CourtCountAggregateInputType = {
    id?: true;
    name?: true;
    tournamentId?: true;
    _all?: true;
};
export type CourtAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourtWhereInput;
    orderBy?: Prisma.CourtOrderByWithRelationInput | Prisma.CourtOrderByWithRelationInput[];
    cursor?: Prisma.CourtWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CourtCountAggregateInputType;
    _min?: CourtMinAggregateInputType;
    _max?: CourtMaxAggregateInputType;
};
export type GetCourtAggregateType<T extends CourtAggregateArgs> = {
    [P in keyof T & keyof AggregateCourt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourt[P]> : Prisma.GetScalarType<T[P], AggregateCourt[P]>;
};
export type CourtGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourtWhereInput;
    orderBy?: Prisma.CourtOrderByWithAggregationInput | Prisma.CourtOrderByWithAggregationInput[];
    by: Prisma.CourtScalarFieldEnum[] | Prisma.CourtScalarFieldEnum;
    having?: Prisma.CourtScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourtCountAggregateInputType | true;
    _min?: CourtMinAggregateInputType;
    _max?: CourtMaxAggregateInputType;
};
export type CourtGroupByOutputType = {
    id: string;
    name: string;
    tournamentId: string;
    _count: CourtCountAggregateOutputType | null;
    _min: CourtMinAggregateOutputType | null;
    _max: CourtMaxAggregateOutputType | null;
};
type GetCourtGroupByPayload<T extends CourtGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CourtGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CourtGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CourtGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CourtGroupByOutputType[P]>;
}>>;
export type CourtWhereInput = {
    AND?: Prisma.CourtWhereInput | Prisma.CourtWhereInput[];
    OR?: Prisma.CourtWhereInput[];
    NOT?: Prisma.CourtWhereInput | Prisma.CourtWhereInput[];
    id?: Prisma.StringFilter<"Court"> | string;
    name?: Prisma.StringFilter<"Court"> | string;
    tournamentId?: Prisma.StringFilter<"Court"> | string;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    matches?: Prisma.MatchListRelationFilter;
};
export type CourtOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    tournament?: Prisma.TournamentOrderByWithRelationInput;
    matches?: Prisma.MatchOrderByRelationAggregateInput;
};
export type CourtWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CourtWhereInput | Prisma.CourtWhereInput[];
    OR?: Prisma.CourtWhereInput[];
    NOT?: Prisma.CourtWhereInput | Prisma.CourtWhereInput[];
    name?: Prisma.StringFilter<"Court"> | string;
    tournamentId?: Prisma.StringFilter<"Court"> | string;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    matches?: Prisma.MatchListRelationFilter;
}, "id">;
export type CourtOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    _count?: Prisma.CourtCountOrderByAggregateInput;
    _max?: Prisma.CourtMaxOrderByAggregateInput;
    _min?: Prisma.CourtMinOrderByAggregateInput;
};
export type CourtScalarWhereWithAggregatesInput = {
    AND?: Prisma.CourtScalarWhereWithAggregatesInput | Prisma.CourtScalarWhereWithAggregatesInput[];
    OR?: Prisma.CourtScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CourtScalarWhereWithAggregatesInput | Prisma.CourtScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Court"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Court"> | string;
    tournamentId?: Prisma.StringWithAggregatesFilter<"Court"> | string;
};
export type CourtCreateInput = {
    id?: string;
    name: string;
    tournament: Prisma.TournamentCreateNestedOneWithoutCourtsInput;
    matches?: Prisma.MatchCreateNestedManyWithoutCourtInput;
};
export type CourtUncheckedCreateInput = {
    id?: string;
    name: string;
    tournamentId: string;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutCourtInput;
};
export type CourtUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutCourtsNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutCourtNestedInput;
};
export type CourtUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutCourtNestedInput;
};
export type CourtCreateManyInput = {
    id?: string;
    name: string;
    tournamentId: string;
};
export type CourtUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CourtUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CourtListRelationFilter = {
    every?: Prisma.CourtWhereInput;
    some?: Prisma.CourtWhereInput;
    none?: Prisma.CourtWhereInput;
};
export type CourtOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CourtCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
};
export type CourtMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
};
export type CourtMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
};
export type CourtScalarRelationFilter = {
    is?: Prisma.CourtWhereInput;
    isNot?: Prisma.CourtWhereInput;
};
export type CourtCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.CourtCreateWithoutTournamentInput, Prisma.CourtUncheckedCreateWithoutTournamentInput> | Prisma.CourtCreateWithoutTournamentInput[] | Prisma.CourtUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.CourtCreateOrConnectWithoutTournamentInput | Prisma.CourtCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.CourtCreateManyTournamentInputEnvelope;
    connect?: Prisma.CourtWhereUniqueInput | Prisma.CourtWhereUniqueInput[];
};
export type CourtUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.CourtCreateWithoutTournamentInput, Prisma.CourtUncheckedCreateWithoutTournamentInput> | Prisma.CourtCreateWithoutTournamentInput[] | Prisma.CourtUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.CourtCreateOrConnectWithoutTournamentInput | Prisma.CourtCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.CourtCreateManyTournamentInputEnvelope;
    connect?: Prisma.CourtWhereUniqueInput | Prisma.CourtWhereUniqueInput[];
};
export type CourtUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.CourtCreateWithoutTournamentInput, Prisma.CourtUncheckedCreateWithoutTournamentInput> | Prisma.CourtCreateWithoutTournamentInput[] | Prisma.CourtUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.CourtCreateOrConnectWithoutTournamentInput | Prisma.CourtCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.CourtUpsertWithWhereUniqueWithoutTournamentInput | Prisma.CourtUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.CourtCreateManyTournamentInputEnvelope;
    set?: Prisma.CourtWhereUniqueInput | Prisma.CourtWhereUniqueInput[];
    disconnect?: Prisma.CourtWhereUniqueInput | Prisma.CourtWhereUniqueInput[];
    delete?: Prisma.CourtWhereUniqueInput | Prisma.CourtWhereUniqueInput[];
    connect?: Prisma.CourtWhereUniqueInput | Prisma.CourtWhereUniqueInput[];
    update?: Prisma.CourtUpdateWithWhereUniqueWithoutTournamentInput | Prisma.CourtUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.CourtUpdateManyWithWhereWithoutTournamentInput | Prisma.CourtUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.CourtScalarWhereInput | Prisma.CourtScalarWhereInput[];
};
export type CourtUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.CourtCreateWithoutTournamentInput, Prisma.CourtUncheckedCreateWithoutTournamentInput> | Prisma.CourtCreateWithoutTournamentInput[] | Prisma.CourtUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.CourtCreateOrConnectWithoutTournamentInput | Prisma.CourtCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.CourtUpsertWithWhereUniqueWithoutTournamentInput | Prisma.CourtUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.CourtCreateManyTournamentInputEnvelope;
    set?: Prisma.CourtWhereUniqueInput | Prisma.CourtWhereUniqueInput[];
    disconnect?: Prisma.CourtWhereUniqueInput | Prisma.CourtWhereUniqueInput[];
    delete?: Prisma.CourtWhereUniqueInput | Prisma.CourtWhereUniqueInput[];
    connect?: Prisma.CourtWhereUniqueInput | Prisma.CourtWhereUniqueInput[];
    update?: Prisma.CourtUpdateWithWhereUniqueWithoutTournamentInput | Prisma.CourtUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.CourtUpdateManyWithWhereWithoutTournamentInput | Prisma.CourtUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.CourtScalarWhereInput | Prisma.CourtScalarWhereInput[];
};
export type CourtCreateNestedOneWithoutMatchesInput = {
    create?: Prisma.XOR<Prisma.CourtCreateWithoutMatchesInput, Prisma.CourtUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.CourtCreateOrConnectWithoutMatchesInput;
    connect?: Prisma.CourtWhereUniqueInput;
};
export type CourtUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: Prisma.XOR<Prisma.CourtCreateWithoutMatchesInput, Prisma.CourtUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.CourtCreateOrConnectWithoutMatchesInput;
    upsert?: Prisma.CourtUpsertWithoutMatchesInput;
    connect?: Prisma.CourtWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourtUpdateToOneWithWhereWithoutMatchesInput, Prisma.CourtUpdateWithoutMatchesInput>, Prisma.CourtUncheckedUpdateWithoutMatchesInput>;
};
export type CourtCreateWithoutTournamentInput = {
    id?: string;
    name: string;
    matches?: Prisma.MatchCreateNestedManyWithoutCourtInput;
};
export type CourtUncheckedCreateWithoutTournamentInput = {
    id?: string;
    name: string;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutCourtInput;
};
export type CourtCreateOrConnectWithoutTournamentInput = {
    where: Prisma.CourtWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourtCreateWithoutTournamentInput, Prisma.CourtUncheckedCreateWithoutTournamentInput>;
};
export type CourtCreateManyTournamentInputEnvelope = {
    data: Prisma.CourtCreateManyTournamentInput | Prisma.CourtCreateManyTournamentInput[];
    skipDuplicates?: boolean;
};
export type CourtUpsertWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.CourtWhereUniqueInput;
    update: Prisma.XOR<Prisma.CourtUpdateWithoutTournamentInput, Prisma.CourtUncheckedUpdateWithoutTournamentInput>;
    create: Prisma.XOR<Prisma.CourtCreateWithoutTournamentInput, Prisma.CourtUncheckedCreateWithoutTournamentInput>;
};
export type CourtUpdateWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.CourtWhereUniqueInput;
    data: Prisma.XOR<Prisma.CourtUpdateWithoutTournamentInput, Prisma.CourtUncheckedUpdateWithoutTournamentInput>;
};
export type CourtUpdateManyWithWhereWithoutTournamentInput = {
    where: Prisma.CourtScalarWhereInput;
    data: Prisma.XOR<Prisma.CourtUpdateManyMutationInput, Prisma.CourtUncheckedUpdateManyWithoutTournamentInput>;
};
export type CourtScalarWhereInput = {
    AND?: Prisma.CourtScalarWhereInput | Prisma.CourtScalarWhereInput[];
    OR?: Prisma.CourtScalarWhereInput[];
    NOT?: Prisma.CourtScalarWhereInput | Prisma.CourtScalarWhereInput[];
    id?: Prisma.StringFilter<"Court"> | string;
    name?: Prisma.StringFilter<"Court"> | string;
    tournamentId?: Prisma.StringFilter<"Court"> | string;
};
export type CourtCreateWithoutMatchesInput = {
    id?: string;
    name: string;
    tournament: Prisma.TournamentCreateNestedOneWithoutCourtsInput;
};
export type CourtUncheckedCreateWithoutMatchesInput = {
    id?: string;
    name: string;
    tournamentId: string;
};
export type CourtCreateOrConnectWithoutMatchesInput = {
    where: Prisma.CourtWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourtCreateWithoutMatchesInput, Prisma.CourtUncheckedCreateWithoutMatchesInput>;
};
export type CourtUpsertWithoutMatchesInput = {
    update: Prisma.XOR<Prisma.CourtUpdateWithoutMatchesInput, Prisma.CourtUncheckedUpdateWithoutMatchesInput>;
    create: Prisma.XOR<Prisma.CourtCreateWithoutMatchesInput, Prisma.CourtUncheckedCreateWithoutMatchesInput>;
    where?: Prisma.CourtWhereInput;
};
export type CourtUpdateToOneWithWhereWithoutMatchesInput = {
    where?: Prisma.CourtWhereInput;
    data: Prisma.XOR<Prisma.CourtUpdateWithoutMatchesInput, Prisma.CourtUncheckedUpdateWithoutMatchesInput>;
};
export type CourtUpdateWithoutMatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutCourtsNestedInput;
};
export type CourtUncheckedUpdateWithoutMatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CourtCreateManyTournamentInput = {
    id?: string;
    name: string;
};
export type CourtUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    matches?: Prisma.MatchUpdateManyWithoutCourtNestedInput;
};
export type CourtUncheckedUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutCourtNestedInput;
};
export type CourtUncheckedUpdateManyWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CourtCountOutputType = {
    matches: number;
};
export type CourtCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matches?: boolean | CourtCountOutputTypeCountMatchesArgs;
};
export type CourtCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourtCountOutputTypeSelect<ExtArgs> | null;
};
export type CourtCountOutputTypeCountMatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
};
export type CourtSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    tournamentId?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    matches?: boolean | Prisma.Court$matchesArgs<ExtArgs>;
    _count?: boolean | Prisma.CourtCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["court"]>;
export type CourtSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    tournamentId?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["court"]>;
export type CourtSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    tournamentId?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["court"]>;
export type CourtSelectScalar = {
    id?: boolean;
    name?: boolean;
    tournamentId?: boolean;
};
export type CourtOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "tournamentId", ExtArgs["result"]["court"]>;
export type CourtInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    matches?: boolean | Prisma.Court$matchesArgs<ExtArgs>;
    _count?: boolean | Prisma.CourtCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CourtIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type CourtIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type $CourtPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Court";
    objects: {
        tournament: Prisma.$TournamentPayload<ExtArgs>;
        matches: Prisma.$MatchPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        tournamentId: string;
    }, ExtArgs["result"]["court"]>;
    composites: {};
};
export type CourtGetPayload<S extends boolean | null | undefined | CourtDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CourtPayload, S>;
export type CourtCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CourtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourtCountAggregateInputType | true;
};
export interface CourtDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Court'];
        meta: {
            name: 'Court';
        };
    };
    findUnique<T extends CourtFindUniqueArgs>(args: Prisma.SelectSubset<T, CourtFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CourtClient<runtime.Types.Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CourtFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CourtFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourtClient<runtime.Types.Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CourtFindFirstArgs>(args?: Prisma.SelectSubset<T, CourtFindFirstArgs<ExtArgs>>): Prisma.Prisma__CourtClient<runtime.Types.Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CourtFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CourtFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourtClient<runtime.Types.Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CourtFindManyArgs>(args?: Prisma.SelectSubset<T, CourtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CourtCreateArgs>(args: Prisma.SelectSubset<T, CourtCreateArgs<ExtArgs>>): Prisma.Prisma__CourtClient<runtime.Types.Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CourtCreateManyArgs>(args?: Prisma.SelectSubset<T, CourtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CourtCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CourtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CourtDeleteArgs>(args: Prisma.SelectSubset<T, CourtDeleteArgs<ExtArgs>>): Prisma.Prisma__CourtClient<runtime.Types.Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CourtUpdateArgs>(args: Prisma.SelectSubset<T, CourtUpdateArgs<ExtArgs>>): Prisma.Prisma__CourtClient<runtime.Types.Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CourtDeleteManyArgs>(args?: Prisma.SelectSubset<T, CourtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CourtUpdateManyArgs>(args: Prisma.SelectSubset<T, CourtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CourtUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CourtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CourtUpsertArgs>(args: Prisma.SelectSubset<T, CourtUpsertArgs<ExtArgs>>): Prisma.Prisma__CourtClient<runtime.Types.Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CourtCountArgs>(args?: Prisma.Subset<T, CourtCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CourtCountAggregateOutputType> : number>;
    aggregate<T extends CourtAggregateArgs>(args: Prisma.Subset<T, CourtAggregateArgs>): Prisma.PrismaPromise<GetCourtAggregateType<T>>;
    groupBy<T extends CourtGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CourtGroupByArgs['orderBy'];
    } : {
        orderBy?: CourtGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CourtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CourtFieldRefs;
}
export interface Prisma__CourtClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tournament<T extends Prisma.TournamentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TournamentDefaultArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    matches<T extends Prisma.Court$matchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Court$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CourtFieldRefs {
    readonly id: Prisma.FieldRef<"Court", 'String'>;
    readonly name: Prisma.FieldRef<"Court", 'String'>;
    readonly tournamentId: Prisma.FieldRef<"Court", 'String'>;
}
export type CourtFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourtSelect<ExtArgs> | null;
    omit?: Prisma.CourtOmit<ExtArgs> | null;
    include?: Prisma.CourtInclude<ExtArgs> | null;
    where: Prisma.CourtWhereUniqueInput;
};
export type CourtFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourtSelect<ExtArgs> | null;
    omit?: Prisma.CourtOmit<ExtArgs> | null;
    include?: Prisma.CourtInclude<ExtArgs> | null;
    where: Prisma.CourtWhereUniqueInput;
};
export type CourtFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CourtFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CourtFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CourtCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourtSelect<ExtArgs> | null;
    omit?: Prisma.CourtOmit<ExtArgs> | null;
    include?: Prisma.CourtInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourtCreateInput, Prisma.CourtUncheckedCreateInput>;
};
export type CourtCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CourtCreateManyInput | Prisma.CourtCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourtCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourtSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourtOmit<ExtArgs> | null;
    data: Prisma.CourtCreateManyInput | Prisma.CourtCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CourtIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CourtUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourtSelect<ExtArgs> | null;
    omit?: Prisma.CourtOmit<ExtArgs> | null;
    include?: Prisma.CourtInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourtUpdateInput, Prisma.CourtUncheckedUpdateInput>;
    where: Prisma.CourtWhereUniqueInput;
};
export type CourtUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CourtUpdateManyMutationInput, Prisma.CourtUncheckedUpdateManyInput>;
    where?: Prisma.CourtWhereInput;
    limit?: number;
};
export type CourtUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourtSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourtOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourtUpdateManyMutationInput, Prisma.CourtUncheckedUpdateManyInput>;
    where?: Prisma.CourtWhereInput;
    limit?: number;
    include?: Prisma.CourtIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CourtUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourtSelect<ExtArgs> | null;
    omit?: Prisma.CourtOmit<ExtArgs> | null;
    include?: Prisma.CourtInclude<ExtArgs> | null;
    where: Prisma.CourtWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourtCreateInput, Prisma.CourtUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CourtUpdateInput, Prisma.CourtUncheckedUpdateInput>;
};
export type CourtDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourtSelect<ExtArgs> | null;
    omit?: Prisma.CourtOmit<ExtArgs> | null;
    include?: Prisma.CourtInclude<ExtArgs> | null;
    where: Prisma.CourtWhereUniqueInput;
};
export type CourtDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourtWhereInput;
    limit?: number;
};
export type Court$matchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CourtDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourtSelect<ExtArgs> | null;
    omit?: Prisma.CourtOmit<ExtArgs> | null;
    include?: Prisma.CourtInclude<ExtArgs> | null;
};
export {};
