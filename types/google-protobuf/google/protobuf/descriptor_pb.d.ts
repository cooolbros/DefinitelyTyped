// package: google.protobuf
// file: descriptor.proto

import * as jspb from "../../index";

export class FileDescriptorSet extends jspb.Message {
    clearFileList(): FileDescriptorSet;
    getFileList(): FileDescriptorProto[];
    setFileList(value: FileDescriptorProto[]): FileDescriptorSet;
    addFile(value?: FileDescriptorProto, index?: number): FileDescriptorProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileDescriptorSet.AsObject;
    static toObject(includeInstance: boolean, msg: FileDescriptorSet): FileDescriptorSet.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: FileDescriptorSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileDescriptorSet;
    static deserializeBinaryFromReader(message: FileDescriptorSet, reader: jspb.BinaryReader): FileDescriptorSet;
}

export namespace FileDescriptorSet {
    export type AsObject = {
        fileList: FileDescriptorProto.AsObject[];
    };
}

export class FileDescriptorProto extends jspb.Message {
    hasName(): boolean;
    clearName(): FileDescriptorProto;
    getName(): string | undefined;
    setName(value: string): FileDescriptorProto;

    hasPackage(): boolean;
    clearPackage(): FileDescriptorProto;
    getPackage(): string | undefined;
    setPackage(value: string): FileDescriptorProto;

    clearDependencyList(): FileDescriptorProto;
    getDependencyList(): string[];
    setDependencyList(value: string[]): FileDescriptorProto;
    addDependency(value: string, index?: number): string;

    clearPublicDependencyList(): FileDescriptorProto;
    getPublicDependencyList(): number[];
    setPublicDependencyList(value: number[]): FileDescriptorProto;
    addPublicDependency(value: number, index?: number): number;

    clearWeakDependencyList(): FileDescriptorProto;
    getWeakDependencyList(): number[];
    setWeakDependencyList(value: number[]): FileDescriptorProto;
    addWeakDependency(value: number, index?: number): number;

    clearMessageTypeList(): FileDescriptorProto;
    getMessageTypeList(): DescriptorProto[];
    setMessageTypeList(value: DescriptorProto[]): FileDescriptorProto;
    addMessageType(value?: DescriptorProto, index?: number): DescriptorProto;

    clearEnumTypeList(): FileDescriptorProto;
    getEnumTypeList(): EnumDescriptorProto[];
    setEnumTypeList(value: EnumDescriptorProto[]): FileDescriptorProto;
    addEnumType(value?: EnumDescriptorProto, index?: number): EnumDescriptorProto;

    clearServiceList(): FileDescriptorProto;
    getServiceList(): ServiceDescriptorProto[];
    setServiceList(value: ServiceDescriptorProto[]): FileDescriptorProto;
    addService(value?: ServiceDescriptorProto, index?: number): ServiceDescriptorProto;

    clearExtensionList(): FileDescriptorProto;
    getExtensionList(): FieldDescriptorProto[];
    setExtensionList(value: FieldDescriptorProto[]): FileDescriptorProto;
    addExtension(value?: FieldDescriptorProto, index?: number): FieldDescriptorProto;

    hasOptions(): boolean;
    clearOptions(): FileDescriptorProto;
    getOptions(): FileOptions | undefined;
    setOptions(value?: FileOptions): FileDescriptorProto;

    hasSourceCodeInfo(): boolean;
    clearSourceCodeInfo(): FileDescriptorProto;
    getSourceCodeInfo(): SourceCodeInfo | undefined;
    setSourceCodeInfo(value?: SourceCodeInfo): FileDescriptorProto;

    hasSyntax(): boolean;
    clearSyntax(): FileDescriptorProto;
    getSyntax(): string | undefined;
    setSyntax(value: string): FileDescriptorProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileDescriptorProto.AsObject;
    static toObject(includeInstance: boolean, msg: FileDescriptorProto): FileDescriptorProto.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: FileDescriptorProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileDescriptorProto;
    static deserializeBinaryFromReader(message: FileDescriptorProto, reader: jspb.BinaryReader): FileDescriptorProto;
}

export namespace FileDescriptorProto {
    export type AsObject = {
        name?: string | undefined;
        pb_package?: string | undefined;
        dependencyList: string[];
        publicDependencyList: number[];
        weakDependencyList: number[];
        messageTypeList: DescriptorProto.AsObject[];
        enumTypeList: EnumDescriptorProto.AsObject[];
        serviceList: ServiceDescriptorProto.AsObject[];
        extensionList: FieldDescriptorProto.AsObject[];
        options?: FileOptions.AsObject | undefined;
        sourceCodeInfo?: SourceCodeInfo.AsObject | undefined;
        syntax?: string | undefined;
    };
}

export class DescriptorProto extends jspb.Message {
    hasName(): boolean;
    clearName(): DescriptorProto;
    getName(): string | undefined;
    setName(value: string): DescriptorProto;

    clearFieldList(): DescriptorProto;
    getFieldList(): FieldDescriptorProto[];
    setFieldList(value: FieldDescriptorProto[]): DescriptorProto;
    addField(value?: FieldDescriptorProto, index?: number): FieldDescriptorProto;

    clearExtensionList(): DescriptorProto;
    getExtensionList(): FieldDescriptorProto[];
    setExtensionList(value: FieldDescriptorProto[]): DescriptorProto;
    addExtension(value?: FieldDescriptorProto, index?: number): FieldDescriptorProto;

    clearNestedTypeList(): DescriptorProto;
    getNestedTypeList(): DescriptorProto[];
    setNestedTypeList(value: DescriptorProto[]): DescriptorProto;
    addNestedType(value?: DescriptorProto, index?: number): DescriptorProto;

    clearEnumTypeList(): DescriptorProto;
    getEnumTypeList(): EnumDescriptorProto[];
    setEnumTypeList(value: EnumDescriptorProto[]): DescriptorProto;
    addEnumType(value?: EnumDescriptorProto, index?: number): EnumDescriptorProto;

    clearExtensionRangeList(): DescriptorProto;
    getExtensionRangeList(): DescriptorProto.ExtensionRange[];
    setExtensionRangeList(value: DescriptorProto.ExtensionRange[]): DescriptorProto;
    addExtensionRange(value?: DescriptorProto.ExtensionRange, index?: number): DescriptorProto.ExtensionRange;

    clearOneofDeclList(): DescriptorProto;
    getOneofDeclList(): OneofDescriptorProto[];
    setOneofDeclList(value: OneofDescriptorProto[]): DescriptorProto;
    addOneofDecl(value?: OneofDescriptorProto, index?: number): OneofDescriptorProto;

    hasOptions(): boolean;
    clearOptions(): DescriptorProto;
    getOptions(): MessageOptions | undefined;
    setOptions(value?: MessageOptions): DescriptorProto;

    clearReservedRangeList(): DescriptorProto;
    getReservedRangeList(): DescriptorProto.ReservedRange[];
    setReservedRangeList(value: DescriptorProto.ReservedRange[]): DescriptorProto;
    addReservedRange(value?: DescriptorProto.ReservedRange, index?: number): DescriptorProto.ReservedRange;

    clearReservedNameList(): DescriptorProto;
    getReservedNameList(): string[];
    setReservedNameList(value: string[]): DescriptorProto;
    addReservedName(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DescriptorProto.AsObject;
    static toObject(includeInstance: boolean, msg: DescriptorProto): DescriptorProto.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: DescriptorProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DescriptorProto;
    static deserializeBinaryFromReader(message: DescriptorProto, reader: jspb.BinaryReader): DescriptorProto;
}

export namespace DescriptorProto {
    export type AsObject = {
        name?: string | undefined;
        fieldList: FieldDescriptorProto.AsObject[];
        extensionList: FieldDescriptorProto.AsObject[];
        nestedTypeList: AsObject[];
        enumTypeList: EnumDescriptorProto.AsObject[];
        extensionRangeList: ExtensionRange.AsObject[];
        oneofDeclList: OneofDescriptorProto.AsObject[];
        options?: MessageOptions.AsObject | undefined;
        reservedRangeList: ReservedRange.AsObject[];
        reservedNameList: string[];
    };

    export class ExtensionRange extends jspb.Message {
        hasStart(): boolean;
        clearStart(): ExtensionRange;
        getStart(): number | undefined;
        setStart(value: number): ExtensionRange;

        hasEnd(): boolean;
        clearEnd(): ExtensionRange;
        getEnd(): number | undefined;
        setEnd(value: number): ExtensionRange;

        hasOptions(): boolean;
        clearOptions(): ExtensionRange;
        getOptions(): ExtensionRangeOptions | undefined;
        setOptions(value?: ExtensionRangeOptions): ExtensionRange;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ExtensionRange.AsObject;
        static toObject(includeInstance: boolean, msg: ExtensionRange): ExtensionRange.AsObject;
        static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
        static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
        static serializeBinaryToWriter(message: ExtensionRange, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ExtensionRange;
        static deserializeBinaryFromReader(message: ExtensionRange, reader: jspb.BinaryReader): ExtensionRange;
    }

    export namespace ExtensionRange {
        export type AsObject = {
            start?: number | undefined;
            end?: number | undefined;
            options?: ExtensionRangeOptions.AsObject | undefined;
        };
    }

    export class ReservedRange extends jspb.Message {
        hasStart(): boolean;
        clearStart(): ReservedRange;
        getStart(): number | undefined;
        setStart(value: number): ReservedRange;

        hasEnd(): boolean;
        clearEnd(): ReservedRange;
        getEnd(): number | undefined;
        setEnd(value: number): ReservedRange;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ReservedRange.AsObject;
        static toObject(includeInstance: boolean, msg: ReservedRange): ReservedRange.AsObject;
        static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
        static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
        static serializeBinaryToWriter(message: ReservedRange, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ReservedRange;
        static deserializeBinaryFromReader(message: ReservedRange, reader: jspb.BinaryReader): ReservedRange;
    }

    export namespace ReservedRange {
        export type AsObject = {
            start?: number | undefined;
            end?: number | undefined;
        };
    }
}

export class ExtensionRangeOptions extends jspb.Message {
    clearUninterpretedOptionList(): ExtensionRangeOptions;
    getUninterpretedOptionList(): UninterpretedOption[];
    setUninterpretedOptionList(value: UninterpretedOption[]): ExtensionRangeOptions;
    addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtensionRangeOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ExtensionRangeOptions): ExtensionRangeOptions.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: ExtensionRangeOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtensionRangeOptions;
    static deserializeBinaryFromReader(
        message: ExtensionRangeOptions,
        reader: jspb.BinaryReader,
    ): ExtensionRangeOptions;
}

export namespace ExtensionRangeOptions {
    export type AsObject = {
        uninterpretedOptionList: UninterpretedOption.AsObject[];
    };
}

export class FieldDescriptorProto extends jspb.Message {
    hasName(): boolean;
    clearName(): FieldDescriptorProto;
    getName(): string | undefined;
    setName(value: string): FieldDescriptorProto;

    hasNumber(): boolean;
    clearNumber(): FieldDescriptorProto;
    getNumber(): number | undefined;
    setNumber(value: number): FieldDescriptorProto;

    hasLabel(): boolean;
    clearLabel(): FieldDescriptorProto;
    getLabel(): FieldDescriptorProto.Label | undefined;
    setLabel(value: FieldDescriptorProto.Label): FieldDescriptorProto;

    hasType(): boolean;
    clearType(): FieldDescriptorProto;
    getType(): FieldDescriptorProto.Type | undefined;
    setType(value: FieldDescriptorProto.Type): FieldDescriptorProto;

    hasTypeName(): boolean;
    clearTypeName(): FieldDescriptorProto;
    getTypeName(): string | undefined;
    setTypeName(value: string): FieldDescriptorProto;

    hasExtendee(): boolean;
    clearExtendee(): FieldDescriptorProto;
    getExtendee(): string | undefined;
    setExtendee(value: string): FieldDescriptorProto;

    hasDefaultValue(): boolean;
    clearDefaultValue(): FieldDescriptorProto;
    getDefaultValue(): string | undefined;
    setDefaultValue(value: string): FieldDescriptorProto;

    hasOneofIndex(): boolean;
    clearOneofIndex(): FieldDescriptorProto;
    getOneofIndex(): number | undefined;
    setOneofIndex(value: number): FieldDescriptorProto;

    hasJsonName(): boolean;
    clearJsonName(): FieldDescriptorProto;
    getJsonName(): string | undefined;
    setJsonName(value: string): FieldDescriptorProto;

    hasOptions(): boolean;
    clearOptions(): FieldDescriptorProto;
    getOptions(): FieldOptions | undefined;
    setOptions(value?: FieldOptions): FieldDescriptorProto;

    hasProto3Optional(): boolean;
    clearProto3Optional(): FieldDescriptorProto;
    getProto3Optional(): boolean | undefined;
    setProto3Optional(value: boolean): FieldDescriptorProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldDescriptorProto.AsObject;
    static toObject(includeInstance: boolean, msg: FieldDescriptorProto): FieldDescriptorProto.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: FieldDescriptorProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldDescriptorProto;
    static deserializeBinaryFromReader(message: FieldDescriptorProto, reader: jspb.BinaryReader): FieldDescriptorProto;
}

export namespace FieldDescriptorProto {
    export type AsObject = {
        name?: string | undefined;
        number?: number | undefined;
        label?: Label | undefined;
        type?: Type | undefined;
        typeName?: string | undefined;
        extendee?: string | undefined;
        defaultValue?: string | undefined;
        oneofIndex?: number | undefined;
        jsonName?: string | undefined;
        options?: FieldOptions.AsObject | undefined;
        proto3Optional?: boolean | undefined;
    };

    export enum Type {
        TYPE_DOUBLE = 1,
        TYPE_FLOAT = 2,
        TYPE_INT64 = 3,
        TYPE_UINT64 = 4,
        TYPE_INT32 = 5,
        TYPE_FIXED64 = 6,
        TYPE_FIXED32 = 7,
        TYPE_BOOL = 8,
        TYPE_STRING = 9,
        TYPE_GROUP = 10,
        TYPE_MESSAGE = 11,
        TYPE_BYTES = 12,
        TYPE_UINT32 = 13,
        TYPE_ENUM = 14,
        TYPE_SFIXED32 = 15,
        TYPE_SFIXED64 = 16,
        TYPE_SINT32 = 17,
        TYPE_SINT64 = 18,
    }

    export enum Label {
        LABEL_OPTIONAL = 1,
        LABEL_REQUIRED = 2,
        LABEL_REPEATED = 3,
    }
}

export class OneofDescriptorProto extends jspb.Message {
    hasName(): boolean;
    clearName(): OneofDescriptorProto;
    getName(): string | undefined;
    setName(value: string): OneofDescriptorProto;

    hasOptions(): boolean;
    clearOptions(): OneofDescriptorProto;
    getOptions(): OneofOptions | undefined;
    setOptions(value?: OneofOptions): OneofDescriptorProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OneofDescriptorProto.AsObject;
    static toObject(includeInstance: boolean, msg: OneofDescriptorProto): OneofDescriptorProto.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: OneofDescriptorProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OneofDescriptorProto;
    static deserializeBinaryFromReader(message: OneofDescriptorProto, reader: jspb.BinaryReader): OneofDescriptorProto;
}

export namespace OneofDescriptorProto {
    export type AsObject = {
        name?: string | undefined;
        options?: OneofOptions.AsObject | undefined;
    };
}

export class EnumDescriptorProto extends jspb.Message {
    hasName(): boolean;
    clearName(): EnumDescriptorProto;
    getName(): string | undefined;
    setName(value: string): EnumDescriptorProto;

    clearValueList(): EnumDescriptorProto;
    getValueList(): EnumValueDescriptorProto[];
    setValueList(value: EnumValueDescriptorProto[]): EnumDescriptorProto;
    addValue(value?: EnumValueDescriptorProto, index?: number): EnumValueDescriptorProto;

    hasOptions(): boolean;
    clearOptions(): EnumDescriptorProto;
    getOptions(): EnumOptions | undefined;
    setOptions(value?: EnumOptions): EnumDescriptorProto;

    clearReservedRangeList(): EnumDescriptorProto;
    getReservedRangeList(): EnumDescriptorProto.EnumReservedRange[];
    setReservedRangeList(value: EnumDescriptorProto.EnumReservedRange[]): EnumDescriptorProto;
    addReservedRange(
        value?: EnumDescriptorProto.EnumReservedRange,
        index?: number,
    ): EnumDescriptorProto.EnumReservedRange;

    clearReservedNameList(): EnumDescriptorProto;
    getReservedNameList(): string[];
    setReservedNameList(value: string[]): EnumDescriptorProto;
    addReservedName(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnumDescriptorProto.AsObject;
    static toObject(includeInstance: boolean, msg: EnumDescriptorProto): EnumDescriptorProto.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: EnumDescriptorProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnumDescriptorProto;
    static deserializeBinaryFromReader(message: EnumDescriptorProto, reader: jspb.BinaryReader): EnumDescriptorProto;
}

export namespace EnumDescriptorProto {
    export type AsObject = {
        name?: string | undefined;
        valueList: EnumValueDescriptorProto.AsObject[];
        options?: EnumOptions.AsObject | undefined;
        reservedRangeList: EnumReservedRange.AsObject[];
        reservedNameList: string[];
    };

    export class EnumReservedRange extends jspb.Message {
        hasStart(): boolean;
        clearStart(): EnumReservedRange;
        getStart(): number | undefined;
        setStart(value: number): EnumReservedRange;

        hasEnd(): boolean;
        clearEnd(): EnumReservedRange;
        getEnd(): number | undefined;
        setEnd(value: number): EnumReservedRange;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): EnumReservedRange.AsObject;
        static toObject(includeInstance: boolean, msg: EnumReservedRange): EnumReservedRange.AsObject;
        static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
        static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
        static serializeBinaryToWriter(message: EnumReservedRange, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): EnumReservedRange;
        static deserializeBinaryFromReader(message: EnumReservedRange, reader: jspb.BinaryReader): EnumReservedRange;
    }

    export namespace EnumReservedRange {
        export type AsObject = {
            start?: number | undefined;
            end?: number | undefined;
        };
    }
}

export class EnumValueDescriptorProto extends jspb.Message {
    hasName(): boolean;
    clearName(): EnumValueDescriptorProto;
    getName(): string | undefined;
    setName(value: string): EnumValueDescriptorProto;

    hasNumber(): boolean;
    clearNumber(): EnumValueDescriptorProto;
    getNumber(): number | undefined;
    setNumber(value: number): EnumValueDescriptorProto;

    hasOptions(): boolean;
    clearOptions(): EnumValueDescriptorProto;
    getOptions(): EnumValueOptions | undefined;
    setOptions(value?: EnumValueOptions): EnumValueDescriptorProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnumValueDescriptorProto.AsObject;
    static toObject(includeInstance: boolean, msg: EnumValueDescriptorProto): EnumValueDescriptorProto.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: EnumValueDescriptorProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnumValueDescriptorProto;
    static deserializeBinaryFromReader(
        message: EnumValueDescriptorProto,
        reader: jspb.BinaryReader,
    ): EnumValueDescriptorProto;
}

export namespace EnumValueDescriptorProto {
    export type AsObject = {
        name?: string | undefined;
        number?: number | undefined;
        options?: EnumValueOptions.AsObject | undefined;
    };
}

export class ServiceDescriptorProto extends jspb.Message {
    hasName(): boolean;
    clearName(): ServiceDescriptorProto;
    getName(): string | undefined;
    setName(value: string): ServiceDescriptorProto;

    clearMethodList(): ServiceDescriptorProto;
    getMethodList(): MethodDescriptorProto[];
    setMethodList(value: MethodDescriptorProto[]): ServiceDescriptorProto;
    addMethod(value?: MethodDescriptorProto, index?: number): MethodDescriptorProto;

    hasOptions(): boolean;
    clearOptions(): ServiceDescriptorProto;
    getOptions(): ServiceOptions | undefined;
    setOptions(value?: ServiceOptions): ServiceDescriptorProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceDescriptorProto.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceDescriptorProto): ServiceDescriptorProto.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: ServiceDescriptorProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceDescriptorProto;
    static deserializeBinaryFromReader(
        message: ServiceDescriptorProto,
        reader: jspb.BinaryReader,
    ): ServiceDescriptorProto;
}

export namespace ServiceDescriptorProto {
    export type AsObject = {
        name?: string | undefined;
        methodList: MethodDescriptorProto.AsObject[];
        options?: ServiceOptions.AsObject | undefined;
    };
}

export class MethodDescriptorProto extends jspb.Message {
    hasName(): boolean;
    clearName(): MethodDescriptorProto;
    getName(): string | undefined;
    setName(value: string): MethodDescriptorProto;

    hasInputType(): boolean;
    clearInputType(): MethodDescriptorProto;
    getInputType(): string | undefined;
    setInputType(value: string): MethodDescriptorProto;

    hasOutputType(): boolean;
    clearOutputType(): MethodDescriptorProto;
    getOutputType(): string | undefined;
    setOutputType(value: string): MethodDescriptorProto;

    hasOptions(): boolean;
    clearOptions(): MethodDescriptorProto;
    getOptions(): MethodOptions | undefined;
    setOptions(value?: MethodOptions): MethodDescriptorProto;

    hasClientStreaming(): boolean;
    clearClientStreaming(): MethodDescriptorProto;
    getClientStreaming(): boolean | undefined;
    setClientStreaming(value: boolean): MethodDescriptorProto;

    hasServerStreaming(): boolean;
    clearServerStreaming(): MethodDescriptorProto;
    getServerStreaming(): boolean | undefined;
    setServerStreaming(value: boolean): MethodDescriptorProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MethodDescriptorProto.AsObject;
    static toObject(includeInstance: boolean, msg: MethodDescriptorProto): MethodDescriptorProto.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: MethodDescriptorProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MethodDescriptorProto;
    static deserializeBinaryFromReader(
        message: MethodDescriptorProto,
        reader: jspb.BinaryReader,
    ): MethodDescriptorProto;
}

export namespace MethodDescriptorProto {
    export type AsObject = {
        name?: string | undefined;
        inputType?: string | undefined;
        outputType?: string | undefined;
        options?: MethodOptions.AsObject | undefined;
        clientStreaming?: boolean | undefined;
        serverStreaming?: boolean | undefined;
    };
}

export class FileOptions extends jspb.Message {
    hasJavaPackage(): boolean;
    clearJavaPackage(): FileOptions;
    getJavaPackage(): string | undefined;
    setJavaPackage(value: string): FileOptions;

    hasJavaOuterClassname(): boolean;
    clearJavaOuterClassname(): FileOptions;
    getJavaOuterClassname(): string | undefined;
    setJavaOuterClassname(value: string): FileOptions;

    hasJavaMultipleFiles(): boolean;
    clearJavaMultipleFiles(): FileOptions;
    getJavaMultipleFiles(): boolean | undefined;
    setJavaMultipleFiles(value: boolean): FileOptions;

    hasJavaGenerateEqualsAndHash(): boolean;
    clearJavaGenerateEqualsAndHash(): FileOptions;
    getJavaGenerateEqualsAndHash(): boolean | undefined;
    setJavaGenerateEqualsAndHash(value: boolean): FileOptions;

    hasJavaStringCheckUtf8(): boolean;
    clearJavaStringCheckUtf8(): FileOptions;
    getJavaStringCheckUtf8(): boolean | undefined;
    setJavaStringCheckUtf8(value: boolean): FileOptions;

    hasOptimizeFor(): boolean;
    clearOptimizeFor(): FileOptions;
    getOptimizeFor(): FileOptions.OptimizeMode | undefined;
    setOptimizeFor(value: FileOptions.OptimizeMode): FileOptions;

    hasGoPackage(): boolean;
    clearGoPackage(): FileOptions;
    getGoPackage(): string | undefined;
    setGoPackage(value: string): FileOptions;

    hasCcGenericServices(): boolean;
    clearCcGenericServices(): FileOptions;
    getCcGenericServices(): boolean | undefined;
    setCcGenericServices(value: boolean): FileOptions;

    hasJavaGenericServices(): boolean;
    clearJavaGenericServices(): FileOptions;
    getJavaGenericServices(): boolean | undefined;
    setJavaGenericServices(value: boolean): FileOptions;

    hasPyGenericServices(): boolean;
    clearPyGenericServices(): FileOptions;
    getPyGenericServices(): boolean | undefined;
    setPyGenericServices(value: boolean): FileOptions;

    hasPhpGenericServices(): boolean;
    clearPhpGenericServices(): FileOptions;
    getPhpGenericServices(): boolean | undefined;
    setPhpGenericServices(value: boolean): FileOptions;

    hasDeprecated(): boolean;
    clearDeprecated(): FileOptions;
    getDeprecated(): boolean | undefined;
    setDeprecated(value: boolean): FileOptions;

    hasCcEnableArenas(): boolean;
    clearCcEnableArenas(): FileOptions;
    getCcEnableArenas(): boolean | undefined;
    setCcEnableArenas(value: boolean): FileOptions;

    hasObjcClassPrefix(): boolean;
    clearObjcClassPrefix(): FileOptions;
    getObjcClassPrefix(): string | undefined;
    setObjcClassPrefix(value: string): FileOptions;

    hasCsharpNamespace(): boolean;
    clearCsharpNamespace(): FileOptions;
    getCsharpNamespace(): string | undefined;
    setCsharpNamespace(value: string): FileOptions;

    hasSwiftPrefix(): boolean;
    clearSwiftPrefix(): FileOptions;
    getSwiftPrefix(): string | undefined;
    setSwiftPrefix(value: string): FileOptions;

    hasPhpClassPrefix(): boolean;
    clearPhpClassPrefix(): FileOptions;
    getPhpClassPrefix(): string | undefined;
    setPhpClassPrefix(value: string): FileOptions;

    hasPhpNamespace(): boolean;
    clearPhpNamespace(): FileOptions;
    getPhpNamespace(): string | undefined;
    setPhpNamespace(value: string): FileOptions;

    hasPhpMetadataNamespace(): boolean;
    clearPhpMetadataNamespace(): FileOptions;
    getPhpMetadataNamespace(): string | undefined;
    setPhpMetadataNamespace(value: string): FileOptions;

    hasRubyPackage(): boolean;
    clearRubyPackage(): FileOptions;
    getRubyPackage(): string | undefined;
    setRubyPackage(value: string): FileOptions;

    clearUninterpretedOptionList(): FileOptions;
    getUninterpretedOptionList(): UninterpretedOption[];
    setUninterpretedOptionList(value: UninterpretedOption[]): FileOptions;
    addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileOptions.AsObject;
    static toObject(includeInstance: boolean, msg: FileOptions): FileOptions.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: FileOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileOptions;
    static deserializeBinaryFromReader(message: FileOptions, reader: jspb.BinaryReader): FileOptions;
}

export namespace FileOptions {
    export type AsObject = {
        javaPackage?: string | undefined;
        javaOuterClassname?: string | undefined;
        javaMultipleFiles?: boolean | undefined;
        javaGenerateEqualsAndHash?: boolean | undefined;
        javaStringCheckUtf8?: boolean | undefined;
        optimizeFor?: OptimizeMode | undefined;
        goPackage?: string | undefined;
        ccGenericServices?: boolean | undefined;
        javaGenericServices?: boolean | undefined;
        pyGenericServices?: boolean | undefined;
        phpGenericServices?: boolean | undefined;
        deprecated?: boolean | undefined;
        ccEnableArenas?: boolean | undefined;
        objcClassPrefix?: string | undefined;
        csharpNamespace?: string | undefined;
        swiftPrefix?: string | undefined;
        phpClassPrefix?: string | undefined;
        phpNamespace?: string | undefined;
        phpMetadataNamespace?: string | undefined;
        rubyPackage?: string | undefined;
        uninterpretedOptionList: UninterpretedOption.AsObject[];
    };

    export enum OptimizeMode {
        SPEED = 1,
        CODE_SIZE = 2,
        LITE_RUNTIME = 3,
    }
}

export class MessageOptions extends jspb.Message {
    hasMessageSetWireFormat(): boolean;
    clearMessageSetWireFormat(): MessageOptions;
    getMessageSetWireFormat(): boolean | undefined;
    setMessageSetWireFormat(value: boolean): MessageOptions;

    hasNoStandardDescriptorAccessor(): boolean;
    clearNoStandardDescriptorAccessor(): MessageOptions;
    getNoStandardDescriptorAccessor(): boolean | undefined;
    setNoStandardDescriptorAccessor(value: boolean): MessageOptions;

    hasDeprecated(): boolean;
    clearDeprecated(): MessageOptions;
    getDeprecated(): boolean | undefined;
    setDeprecated(value: boolean): MessageOptions;

    hasMapEntry(): boolean;
    clearMapEntry(): MessageOptions;
    getMapEntry(): boolean | undefined;
    setMapEntry(value: boolean): MessageOptions;

    clearUninterpretedOptionList(): MessageOptions;
    getUninterpretedOptionList(): UninterpretedOption[];
    setUninterpretedOptionList(value: UninterpretedOption[]): MessageOptions;
    addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageOptions.AsObject;
    static toObject(includeInstance: boolean, msg: MessageOptions): MessageOptions.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: MessageOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageOptions;
    static deserializeBinaryFromReader(message: MessageOptions, reader: jspb.BinaryReader): MessageOptions;
}

export namespace MessageOptions {
    export type AsObject = {
        messageSetWireFormat?: boolean | undefined;
        noStandardDescriptorAccessor?: boolean | undefined;
        deprecated?: boolean | undefined;
        mapEntry?: boolean | undefined;
        uninterpretedOptionList: UninterpretedOption.AsObject[];
    };
}

export class FieldOptions extends jspb.Message {
    hasCtype(): boolean;
    clearCtype(): FieldOptions;
    getCtype(): FieldOptions.CType | undefined;
    setCtype(value: FieldOptions.CType): FieldOptions;

    hasPacked(): boolean;
    clearPacked(): FieldOptions;
    getPacked(): boolean | undefined;
    setPacked(value: boolean): FieldOptions;

    hasJstype(): boolean;
    clearJstype(): FieldOptions;
    getJstype(): FieldOptions.JSType | undefined;
    setJstype(value: FieldOptions.JSType): FieldOptions;

    hasLazy(): boolean;
    clearLazy(): FieldOptions;
    getLazy(): boolean | undefined;
    setLazy(value: boolean): FieldOptions;

    hasDeprecated(): boolean;
    clearDeprecated(): FieldOptions;
    getDeprecated(): boolean | undefined;
    setDeprecated(value: boolean): FieldOptions;

    hasWeak(): boolean;
    clearWeak(): FieldOptions;
    getWeak(): boolean | undefined;
    setWeak(value: boolean): FieldOptions;

    clearUninterpretedOptionList(): FieldOptions;
    getUninterpretedOptionList(): UninterpretedOption[];
    setUninterpretedOptionList(value: UninterpretedOption[]): FieldOptions;
    addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldOptions.AsObject;
    static toObject(includeInstance: boolean, msg: FieldOptions): FieldOptions.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: FieldOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldOptions;
    static deserializeBinaryFromReader(message: FieldOptions, reader: jspb.BinaryReader): FieldOptions;
}

export namespace FieldOptions {
    export type AsObject = {
        ctype?: CType | undefined;
        packed?: boolean | undefined;
        jstype?: JSType | undefined;
        lazy?: boolean | undefined;
        deprecated?: boolean | undefined;
        weak?: boolean | undefined;
        uninterpretedOptionList: UninterpretedOption.AsObject[];
    };

    export enum CType {
        STRING = 0,
        CORD = 1,
        STRING_PIECE = 2,
    }

    export enum JSType {
        JS_NORMAL = 0,
        JS_STRING = 1,
        JS_NUMBER = 2,
    }
}

export class OneofOptions extends jspb.Message {
    clearUninterpretedOptionList(): OneofOptions;
    getUninterpretedOptionList(): UninterpretedOption[];
    setUninterpretedOptionList(value: UninterpretedOption[]): OneofOptions;
    addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OneofOptions.AsObject;
    static toObject(includeInstance: boolean, msg: OneofOptions): OneofOptions.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: OneofOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OneofOptions;
    static deserializeBinaryFromReader(message: OneofOptions, reader: jspb.BinaryReader): OneofOptions;
}

export namespace OneofOptions {
    export type AsObject = {
        uninterpretedOptionList: UninterpretedOption.AsObject[];
    };
}

export class EnumOptions extends jspb.Message {
    hasAllowAlias(): boolean;
    clearAllowAlias(): EnumOptions;
    getAllowAlias(): boolean | undefined;
    setAllowAlias(value: boolean): EnumOptions;

    hasDeprecated(): boolean;
    clearDeprecated(): EnumOptions;
    getDeprecated(): boolean | undefined;
    setDeprecated(value: boolean): EnumOptions;

    clearUninterpretedOptionList(): EnumOptions;
    getUninterpretedOptionList(): UninterpretedOption[];
    setUninterpretedOptionList(value: UninterpretedOption[]): EnumOptions;
    addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnumOptions.AsObject;
    static toObject(includeInstance: boolean, msg: EnumOptions): EnumOptions.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: EnumOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnumOptions;
    static deserializeBinaryFromReader(message: EnumOptions, reader: jspb.BinaryReader): EnumOptions;
}

export namespace EnumOptions {
    export type AsObject = {
        allowAlias?: boolean | undefined;
        deprecated?: boolean | undefined;
        uninterpretedOptionList: UninterpretedOption.AsObject[];
    };
}

export class EnumValueOptions extends jspb.Message {
    hasDeprecated(): boolean;
    clearDeprecated(): EnumValueOptions;
    getDeprecated(): boolean | undefined;
    setDeprecated(value: boolean): EnumValueOptions;

    clearUninterpretedOptionList(): EnumValueOptions;
    getUninterpretedOptionList(): UninterpretedOption[];
    setUninterpretedOptionList(value: UninterpretedOption[]): EnumValueOptions;
    addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnumValueOptions.AsObject;
    static toObject(includeInstance: boolean, msg: EnumValueOptions): EnumValueOptions.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: EnumValueOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnumValueOptions;
    static deserializeBinaryFromReader(message: EnumValueOptions, reader: jspb.BinaryReader): EnumValueOptions;
}

export namespace EnumValueOptions {
    export type AsObject = {
        deprecated?: boolean | undefined;
        uninterpretedOptionList: UninterpretedOption.AsObject[];
    };
}

export class ServiceOptions extends jspb.Message {
    hasDeprecated(): boolean;
    clearDeprecated(): ServiceOptions;
    getDeprecated(): boolean | undefined;
    setDeprecated(value: boolean): ServiceOptions;

    clearUninterpretedOptionList(): ServiceOptions;
    getUninterpretedOptionList(): UninterpretedOption[];
    setUninterpretedOptionList(value: UninterpretedOption[]): ServiceOptions;
    addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceOptions): ServiceOptions.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: ServiceOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceOptions;
    static deserializeBinaryFromReader(message: ServiceOptions, reader: jspb.BinaryReader): ServiceOptions;
}

export namespace ServiceOptions {
    export type AsObject = {
        deprecated?: boolean | undefined;
        uninterpretedOptionList: UninterpretedOption.AsObject[];
    };
}

export class MethodOptions extends jspb.Message {
    hasDeprecated(): boolean;
    clearDeprecated(): MethodOptions;
    getDeprecated(): boolean | undefined;
    setDeprecated(value: boolean): MethodOptions;

    hasIdempotencyLevel(): boolean;
    clearIdempotencyLevel(): MethodOptions;
    getIdempotencyLevel(): MethodOptions.IdempotencyLevel | undefined;
    setIdempotencyLevel(value: MethodOptions.IdempotencyLevel): MethodOptions;

    clearUninterpretedOptionList(): MethodOptions;
    getUninterpretedOptionList(): UninterpretedOption[];
    setUninterpretedOptionList(value: UninterpretedOption[]): MethodOptions;
    addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MethodOptions.AsObject;
    static toObject(includeInstance: boolean, msg: MethodOptions): MethodOptions.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: MethodOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MethodOptions;
    static deserializeBinaryFromReader(message: MethodOptions, reader: jspb.BinaryReader): MethodOptions;
}

export namespace MethodOptions {
    export type AsObject = {
        deprecated?: boolean | undefined;
        idempotencyLevel?: IdempotencyLevel | undefined;
        uninterpretedOptionList: UninterpretedOption.AsObject[];
    };

    export enum IdempotencyLevel {
        IDEMPOTENCY_UNKNOWN = 0,
        NO_SIDE_EFFECTS = 1,
        IDEMPOTENT = 2,
    }
}

export class UninterpretedOption extends jspb.Message {
    clearNameList(): UninterpretedOption;
    getNameList(): UninterpretedOption.NamePart[];
    setNameList(value: UninterpretedOption.NamePart[]): UninterpretedOption;
    addName(value?: UninterpretedOption.NamePart, index?: number): UninterpretedOption.NamePart;

    hasIdentifierValue(): boolean;
    clearIdentifierValue(): UninterpretedOption;
    getIdentifierValue(): string | undefined;
    setIdentifierValue(value: string): UninterpretedOption;

    hasPositiveIntValue(): boolean;
    clearPositiveIntValue(): UninterpretedOption;
    getPositiveIntValue(): number | undefined;
    setPositiveIntValue(value: number): UninterpretedOption;

    hasNegativeIntValue(): boolean;
    clearNegativeIntValue(): UninterpretedOption;
    getNegativeIntValue(): number | undefined;
    setNegativeIntValue(value: number): UninterpretedOption;

    hasDoubleValue(): boolean;
    clearDoubleValue(): UninterpretedOption;
    getDoubleValue(): number | undefined;
    setDoubleValue(value: number): UninterpretedOption;

    hasStringValue(): boolean;
    clearStringValue(): UninterpretedOption;
    getStringValue(): Uint8Array | string;
    getStringValue_asU8(): Uint8Array;
    getStringValue_asB64(): string;
    setStringValue(value: Uint8Array | string): UninterpretedOption;

    hasAggregateValue(): boolean;
    clearAggregateValue(): UninterpretedOption;
    getAggregateValue(): string | undefined;
    setAggregateValue(value: string): UninterpretedOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UninterpretedOption.AsObject;
    static toObject(includeInstance: boolean, msg: UninterpretedOption): UninterpretedOption.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: UninterpretedOption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UninterpretedOption;
    static deserializeBinaryFromReader(message: UninterpretedOption, reader: jspb.BinaryReader): UninterpretedOption;
}

export namespace UninterpretedOption {
    export type AsObject = {
        nameList: NamePart.AsObject[];
        identifierValue?: string | undefined;
        positiveIntValue?: number | undefined;
        negativeIntValue?: number | undefined;
        doubleValue?: number | undefined;
        stringValue: Uint8Array | string;
        aggregateValue?: string | undefined;
    };

    export class NamePart extends jspb.Message {
        hasNamePart(): boolean;
        clearNamePart(): NamePart;
        getNamePart(): string | undefined;
        setNamePart(value: string): NamePart;

        hasIsExtension(): boolean;
        clearIsExtension(): NamePart;
        getIsExtension(): boolean | undefined;
        setIsExtension(value: boolean): NamePart;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NamePart.AsObject;
        static toObject(includeInstance: boolean, msg: NamePart): NamePart.AsObject;
        static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
        static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
        static serializeBinaryToWriter(message: NamePart, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NamePart;
        static deserializeBinaryFromReader(message: NamePart, reader: jspb.BinaryReader): NamePart;
    }

    export namespace NamePart {
        export type AsObject = {
            namePart?: string | undefined;
            isExtension?: boolean | undefined;
        };
    }
}

export class SourceCodeInfo extends jspb.Message {
    clearLocationList(): SourceCodeInfo;
    getLocationList(): SourceCodeInfo.Location[];
    setLocationList(value: SourceCodeInfo.Location[]): SourceCodeInfo;
    addLocation(value?: SourceCodeInfo.Location, index?: number): SourceCodeInfo.Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceCodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SourceCodeInfo): SourceCodeInfo.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: SourceCodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceCodeInfo;
    static deserializeBinaryFromReader(message: SourceCodeInfo, reader: jspb.BinaryReader): SourceCodeInfo;
}

export namespace SourceCodeInfo {
    export type AsObject = {
        locationList: Location.AsObject[];
    };

    export class Location extends jspb.Message {
        clearPathList(): Location;
        getPathList(): number[];
        setPathList(value: number[]): Location;
        addPath(value: number, index?: number): number;

        clearSpanList(): Location;
        getSpanList(): number[];
        setSpanList(value: number[]): Location;
        addSpan(value: number, index?: number): number;

        hasLeadingComments(): boolean;
        clearLeadingComments(): Location;
        getLeadingComments(): string | undefined;
        setLeadingComments(value: string): Location;

        hasTrailingComments(): boolean;
        clearTrailingComments(): Location;
        getTrailingComments(): string | undefined;
        setTrailingComments(value: string): Location;

        clearLeadingDetachedCommentsList(): Location;
        getLeadingDetachedCommentsList(): string[];
        setLeadingDetachedCommentsList(value: string[]): Location;
        addLeadingDetachedComments(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Location.AsObject;
        static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
        static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
        static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
        static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Location;
        static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
    }

    export namespace Location {
        export type AsObject = {
            pathList: number[];
            spanList: number[];
            leadingComments?: string | undefined;
            trailingComments?: string | undefined;
            leadingDetachedCommentsList: string[];
        };
    }
}

export class GeneratedCodeInfo extends jspb.Message {
    clearAnnotationList(): GeneratedCodeInfo;
    getAnnotationList(): GeneratedCodeInfo.Annotation[];
    setAnnotationList(value: GeneratedCodeInfo.Annotation[]): GeneratedCodeInfo;
    addAnnotation(value?: GeneratedCodeInfo.Annotation, index?: number): GeneratedCodeInfo.Annotation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeneratedCodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: GeneratedCodeInfo): GeneratedCodeInfo.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: GeneratedCodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeneratedCodeInfo;
    static deserializeBinaryFromReader(message: GeneratedCodeInfo, reader: jspb.BinaryReader): GeneratedCodeInfo;
}

export namespace GeneratedCodeInfo {
    export type AsObject = {
        annotationList: Annotation.AsObject[];
    };

    export class Annotation extends jspb.Message {
        clearPathList(): Annotation;
        getPathList(): number[];
        setPathList(value: number[]): Annotation;
        addPath(value: number, index?: number): number;

        hasSourceFile(): boolean;
        clearSourceFile(): Annotation;
        getSourceFile(): string | undefined;
        setSourceFile(value: string): Annotation;

        hasBegin(): boolean;
        clearBegin(): Annotation;
        getBegin(): number | undefined;
        setBegin(value: number): Annotation;

        hasEnd(): boolean;
        clearEnd(): Annotation;
        getEnd(): number | undefined;
        setEnd(value: number): Annotation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Annotation.AsObject;
        static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
        static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
        static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
        static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Annotation;
        static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
    }

    export namespace Annotation {
        export type AsObject = {
            pathList: number[];
            sourceFile?: string | undefined;
            begin?: number | undefined;
            end?: number | undefined;
        };
    }
}
