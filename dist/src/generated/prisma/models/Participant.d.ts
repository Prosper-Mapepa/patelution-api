import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ParticipantModel = runtime.Types.Result.DefaultSelection<Prisma.$ParticipantPayload>;
export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null;
    _min: ParticipantMinAggregateOutputType | null;
    _max: ParticipantMaxAggregateOutputType | null;
};
export type ParticipantMinAggregateOutputType = {
    id: string | null;
    displayName: string | null;
    createdAt: Date | null;
    tournamentId: string | null;
};
export type ParticipantMaxAggregateOutputType = {
    id: string | null;
    displayName: string | null;
    createdAt: Date | null;
    tournamentId: string | null;
};
export type ParticipantCountAggregateOutputType = {
    id: number;
    displayName: number;
    createdAt: number;
    tournamentId: number;
    _all: number;
};
export type ParticipantMinAggregateInputType = {
    id?: true;
    displayName?: true;
    createdAt?: true;
    tournamentId?: true;
};
export type ParticipantMaxAggregateInputType = {
    id?: true;
    displayName?: true;
    createdAt?: true;
    tournamentId?: true;
};
export type ParticipantCountAggregateInputType = {
    id?: true;
    displayName?: true;
    createdAt?: true;
    tournamentId?: true;
    _all?: true;
};
export type ParticipantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParticipantWhereInput;
    orderBy?: Prisma.ParticipantOrderByWithRelationInput | Prisma.ParticipantOrderByWithRelationInput[];
    cursor?: Prisma.ParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParticipantCountAggregateInputType;
    _min?: ParticipantMinAggregateInputType;
    _max?: ParticipantMaxAggregateInputType;
};
export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
    [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParticipant[P]> : Prisma.GetScalarType<T[P], AggregateParticipant[P]>;
};
export type ParticipantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParticipantWhereInput;
    orderBy?: Prisma.ParticipantOrderByWithAggregationInput | Prisma.ParticipantOrderByWithAggregationInput[];
    by: Prisma.ParticipantScalarFieldEnum[] | Prisma.ParticipantScalarFieldEnum;
    having?: Prisma.ParticipantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParticipantCountAggregateInputType | true;
    _min?: ParticipantMinAggregateInputType;
    _max?: ParticipantMaxAggregateInputType;
};
export type ParticipantGroupByOutputType = {
    id: string;
    displayName: string;
    createdAt: Date;
    tournamentId: string;
    _count: ParticipantCountAggregateOutputType | null;
    _min: ParticipantMinAggregateOutputType | null;
    _max: ParticipantMaxAggregateOutputType | null;
};
type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParticipantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParticipantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParticipantGroupByOutputType[P]>;
}>>;
export type ParticipantWhereInput = {
    AND?: Prisma.ParticipantWhereInput | Prisma.ParticipantWhereInput[];
    OR?: Prisma.ParticipantWhereInput[];
    NOT?: Prisma.ParticipantWhereInput | Prisma.ParticipantWhereInput[];
    id?: Prisma.StringFilter<"Participant"> | string;
    displayName?: Prisma.StringFilter<"Participant"> | string;
    createdAt?: Prisma.DateTimeFilter<"Participant"> | Date | string;
    tournamentId?: Prisma.StringFilter<"Participant"> | string;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
};
export type ParticipantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    tournament?: Prisma.TournamentOrderByWithRelationInput;
};
export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ParticipantWhereInput | Prisma.ParticipantWhereInput[];
    OR?: Prisma.ParticipantWhereInput[];
    NOT?: Prisma.ParticipantWhereInput | Prisma.ParticipantWhereInput[];
    displayName?: Prisma.StringFilter<"Participant"> | string;
    createdAt?: Prisma.DateTimeFilter<"Participant"> | Date | string;
    tournamentId?: Prisma.StringFilter<"Participant"> | string;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
}, "id">;
export type ParticipantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    _count?: Prisma.ParticipantCountOrderByAggregateInput;
    _max?: Prisma.ParticipantMaxOrderByAggregateInput;
    _min?: Prisma.ParticipantMinOrderByAggregateInput;
};
export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParticipantScalarWhereWithAggregatesInput | Prisma.ParticipantScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParticipantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParticipantScalarWhereWithAggregatesInput | Prisma.ParticipantScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Participant"> | string;
    displayName?: Prisma.StringWithAggregatesFilter<"Participant"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Participant"> | Date | string;
    tournamentId?: Prisma.StringWithAggregatesFilter<"Participant"> | string;
};
export type ParticipantCreateInput = {
    id?: string;
    displayName: string;
    createdAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutParticipantsInput;
};
export type ParticipantUncheckedCreateInput = {
    id?: string;
    displayName: string;
    createdAt?: Date | string;
    tournamentId: string;
};
export type ParticipantUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutParticipantsNestedInput;
};
export type ParticipantUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ParticipantCreateManyInput = {
    id?: string;
    displayName: string;
    createdAt?: Date | string;
    tournamentId: string;
};
export type ParticipantUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParticipantUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ParticipantListRelationFilter = {
    every?: Prisma.ParticipantWhereInput;
    some?: Prisma.ParticipantWhereInput;
    none?: Prisma.ParticipantWhereInput;
};
export type ParticipantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ParticipantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
};
export type ParticipantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
};
export type ParticipantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
};
export type ParticipantCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutTournamentInput, Prisma.ParticipantUncheckedCreateWithoutTournamentInput> | Prisma.ParticipantCreateWithoutTournamentInput[] | Prisma.ParticipantUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutTournamentInput | Prisma.ParticipantCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.ParticipantCreateManyTournamentInputEnvelope;
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
};
export type ParticipantUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutTournamentInput, Prisma.ParticipantUncheckedCreateWithoutTournamentInput> | Prisma.ParticipantCreateWithoutTournamentInput[] | Prisma.ParticipantUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutTournamentInput | Prisma.ParticipantCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.ParticipantCreateManyTournamentInputEnvelope;
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
};
export type ParticipantUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutTournamentInput, Prisma.ParticipantUncheckedCreateWithoutTournamentInput> | Prisma.ParticipantCreateWithoutTournamentInput[] | Prisma.ParticipantUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutTournamentInput | Prisma.ParticipantCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.ParticipantUpsertWithWhereUniqueWithoutTournamentInput | Prisma.ParticipantUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.ParticipantCreateManyTournamentInputEnvelope;
    set?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    disconnect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    delete?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    update?: Prisma.ParticipantUpdateWithWhereUniqueWithoutTournamentInput | Prisma.ParticipantUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.ParticipantUpdateManyWithWhereWithoutTournamentInput | Prisma.ParticipantUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.ParticipantScalarWhereInput | Prisma.ParticipantScalarWhereInput[];
};
export type ParticipantUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutTournamentInput, Prisma.ParticipantUncheckedCreateWithoutTournamentInput> | Prisma.ParticipantCreateWithoutTournamentInput[] | Prisma.ParticipantUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutTournamentInput | Prisma.ParticipantCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.ParticipantUpsertWithWhereUniqueWithoutTournamentInput | Prisma.ParticipantUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.ParticipantCreateManyTournamentInputEnvelope;
    set?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    disconnect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    delete?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    update?: Prisma.ParticipantUpdateWithWhereUniqueWithoutTournamentInput | Prisma.ParticipantUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.ParticipantUpdateManyWithWhereWithoutTournamentInput | Prisma.ParticipantUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.ParticipantScalarWhereInput | Prisma.ParticipantScalarWhereInput[];
};
export type ParticipantCreateWithoutTournamentInput = {
    id?: string;
    displayName: string;
    createdAt?: Date | string;
};
export type ParticipantUncheckedCreateWithoutTournamentInput = {
    id?: string;
    displayName: string;
    createdAt?: Date | string;
};
export type ParticipantCreateOrConnectWithoutTournamentInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutTournamentInput, Prisma.ParticipantUncheckedCreateWithoutTournamentInput>;
};
export type ParticipantCreateManyTournamentInputEnvelope = {
    data: Prisma.ParticipantCreateManyTournamentInput | Prisma.ParticipantCreateManyTournamentInput[];
    skipDuplicates?: boolean;
};
export type ParticipantUpsertWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParticipantUpdateWithoutTournamentInput, Prisma.ParticipantUncheckedUpdateWithoutTournamentInput>;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutTournamentInput, Prisma.ParticipantUncheckedCreateWithoutTournamentInput>;
};
export type ParticipantUpdateWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateWithoutTournamentInput, Prisma.ParticipantUncheckedUpdateWithoutTournamentInput>;
};
export type ParticipantUpdateManyWithWhereWithoutTournamentInput = {
    where: Prisma.ParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateManyMutationInput, Prisma.ParticipantUncheckedUpdateManyWithoutTournamentInput>;
};
export type ParticipantScalarWhereInput = {
    AND?: Prisma.ParticipantScalarWhereInput | Prisma.ParticipantScalarWhereInput[];
    OR?: Prisma.ParticipantScalarWhereInput[];
    NOT?: Prisma.ParticipantScalarWhereInput | Prisma.ParticipantScalarWhereInput[];
    id?: Prisma.StringFilter<"Participant"> | string;
    displayName?: Prisma.StringFilter<"Participant"> | string;
    createdAt?: Prisma.DateTimeFilter<"Participant"> | Date | string;
    tournamentId?: Prisma.StringFilter<"Participant"> | string;
};
export type ParticipantCreateManyTournamentInput = {
    id?: string;
    displayName: string;
    createdAt?: Date | string;
};
export type ParticipantUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParticipantUncheckedUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParticipantUncheckedUpdateManyWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParticipantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    displayName?: boolean;
    createdAt?: boolean;
    tournamentId?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["participant"]>;
export type ParticipantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    displayName?: boolean;
    createdAt?: boolean;
    tournamentId?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["participant"]>;
export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    displayName?: boolean;
    createdAt?: boolean;
    tournamentId?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["participant"]>;
export type ParticipantSelectScalar = {
    id?: boolean;
    displayName?: boolean;
    createdAt?: boolean;
    tournamentId?: boolean;
};
export type ParticipantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "displayName" | "createdAt" | "tournamentId", ExtArgs["result"]["participant"]>;
export type ParticipantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type $ParticipantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Participant";
    objects: {
        tournament: Prisma.$TournamentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        displayName: string;
        createdAt: Date;
        tournamentId: string;
    }, ExtArgs["result"]["participant"]>;
    composites: {};
};
export type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParticipantPayload, S>;
export type ParticipantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParticipantCountAggregateInputType | true;
};
export interface ParticipantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Participant'];
        meta: {
            name: 'Participant';
        };
    };
    findUnique<T extends ParticipantFindUniqueArgs>(args: Prisma.SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParticipantFindFirstArgs>(args?: Prisma.SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParticipantFindManyArgs>(args?: Prisma.SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParticipantCreateArgs>(args: Prisma.SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParticipantCreateManyArgs>(args?: Prisma.SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ParticipantDeleteArgs>(args: Prisma.SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParticipantUpdateArgs>(args: Prisma.SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParticipantUpdateManyArgs>(args: Prisma.SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ParticipantUpsertArgs>(args: Prisma.SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ParticipantCountArgs>(args?: Prisma.Subset<T, ParticipantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParticipantCountAggregateOutputType> : number>;
    aggregate<T extends ParticipantAggregateArgs>(args: Prisma.Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>;
    groupBy<T extends ParticipantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParticipantGroupByArgs['orderBy'];
    } : {
        orderBy?: ParticipantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParticipantFieldRefs;
}
export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tournament<T extends Prisma.TournamentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TournamentDefaultArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParticipantFieldRefs {
    readonly id: Prisma.FieldRef<"Participant", 'String'>;
    readonly displayName: Prisma.FieldRef<"Participant", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Participant", 'DateTime'>;
    readonly tournamentId: Prisma.FieldRef<"Participant", 'String'>;
}
export type ParticipantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    where: Prisma.ParticipantWhereUniqueInput;
};
export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    where: Prisma.ParticipantWhereUniqueInput;
};
export type ParticipantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ParticipantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ParticipantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ParticipantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParticipantCreateInput, Prisma.ParticipantUncheckedCreateInput>;
};
export type ParticipantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParticipantCreateManyInput | Prisma.ParticipantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ParticipantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParticipantSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    data: Prisma.ParticipantCreateManyInput | Prisma.ParticipantCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ParticipantIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ParticipantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParticipantUpdateInput, Prisma.ParticipantUncheckedUpdateInput>;
    where: Prisma.ParticipantWhereUniqueInput;
};
export type ParticipantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParticipantUpdateManyMutationInput, Prisma.ParticipantUncheckedUpdateManyInput>;
    where?: Prisma.ParticipantWhereInput;
    limit?: number;
};
export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParticipantSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParticipantUpdateManyMutationInput, Prisma.ParticipantUncheckedUpdateManyInput>;
    where?: Prisma.ParticipantWhereInput;
    limit?: number;
    include?: Prisma.ParticipantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ParticipantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateInput, Prisma.ParticipantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParticipantUpdateInput, Prisma.ParticipantUncheckedUpdateInput>;
};
export type ParticipantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    where: Prisma.ParticipantWhereUniqueInput;
};
export type ParticipantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParticipantWhereInput;
    limit?: number;
};
export type ParticipantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
};
export {};
