import * as $protobuf from "protobufjs";
export namespace foos {

    class Foos extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Foos;
        public createPlayer(request: foos.ICreatePlayerRequest, callback: foos.Foos.CreatePlayerCallback): void;
        public createPlayer(request: foos.ICreatePlayerRequest): Promise<foos.CreatePlayerResponse>;
        public getPlayers(request: foos.IGetPlayersRequest, callback: foos.Foos.GetPlayersCallback): void;
        public getPlayers(request: foos.IGetPlayersRequest): Promise<foos.GetPlayersResponse>;
        public inputGame(request: foos.IInputGameRequest, callback: foos.Foos.InputGameCallback): void;
        public inputGame(request: foos.IInputGameRequest): Promise<foos.InputGameResponse>;
        public getGamesForPlayer(request: foos.IGetGamesForPlayerRequest, callback: foos.Foos.GetGamesForPlayerCallback): void;
        public getGamesForPlayer(request: foos.IGetGamesForPlayerRequest): Promise<foos.GetGamesForPlayerResponse>;
        public createLeague(request: foos.ICreateLeagueRequest, callback: foos.Foos.CreateLeagueCallback): void;
        public createLeague(request: foos.ICreateLeagueRequest): Promise<foos.CreateLeagueResponse>;
        public getLeagues(request: foos.IGetLeaguesRequest, callback: foos.Foos.GetLeaguesCallback): void;
        public getLeagues(request: foos.IGetLeaguesRequest): Promise<foos.GetLeaguesResponse>;
    }

    namespace Foos {

        type CreatePlayerCallback = (error: (Error|null), response?: foos.CreatePlayerResponse) => void;

        type GetPlayersCallback = (error: (Error|null), response?: foos.GetPlayersResponse) => void;

        type InputGameCallback = (error: (Error|null), response?: foos.InputGameResponse) => void;

        type GetGamesForPlayerCallback = (error: (Error|null), response?: foos.GetGamesForPlayerResponse) => void;

        type CreateLeagueCallback = (error: (Error|null), response?: foos.CreateLeagueResponse) => void;

        type GetLeaguesCallback = (error: (Error|null), response?: foos.GetLeaguesResponse) => void;
    }

    interface IPlayer {
        id?: (string|null);
        name?: (string|null);
        rating?: (number|null);
    }

    class Player implements IPlayer {
        constructor(properties?: foos.IPlayer);
        public id: string;
        public name: string;
        public rating: number;
        public static create(properties?: foos.IPlayer): foos.Player;
        public static encode(message: foos.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.Player;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.Player;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.Player;
        public static toObject(message: foos.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGame {
    }

    class Game implements IGame {
        constructor(properties?: foos.IGame);
        public static create(properties?: foos.IGame): foos.Game;
        public static encode(message: foos.IGame, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.IGame, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.Game;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.Game;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.Game;
        public static toObject(message: foos.Game, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILeague {
        id?: (string|null);
        name?: (string|null);
        playerIds?: (string[]|null);
    }

    class League implements ILeague {
        constructor(properties?: foos.ILeague);
        public id: string;
        public name: string;
        public playerIds: string[];
        public static create(properties?: foos.ILeague): foos.League;
        public static encode(message: foos.ILeague, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.ILeague, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.League;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.League;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.League;
        public static toObject(message: foos.League, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICreatePlayerRequest {
        name?: (string|null);
        leagueId?: (string|null);
    }

    class CreatePlayerRequest implements ICreatePlayerRequest {
        constructor(properties?: foos.ICreatePlayerRequest);
        public name: string;
        public leagueId: string;
        public static create(properties?: foos.ICreatePlayerRequest): foos.CreatePlayerRequest;
        public static encode(message: foos.ICreatePlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.ICreatePlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.CreatePlayerRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.CreatePlayerRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.CreatePlayerRequest;
        public static toObject(message: foos.CreatePlayerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICreatePlayerResponse {
        player?: (foos.IPlayer|null);
    }

    class CreatePlayerResponse implements ICreatePlayerResponse {
        constructor(properties?: foos.ICreatePlayerResponse);
        public player?: (foos.IPlayer|null);
        public static create(properties?: foos.ICreatePlayerResponse): foos.CreatePlayerResponse;
        public static encode(message: foos.ICreatePlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.ICreatePlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.CreatePlayerResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.CreatePlayerResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.CreatePlayerResponse;
        public static toObject(message: foos.CreatePlayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGetPlayersRequest {
    }

    class GetPlayersRequest implements IGetPlayersRequest {
        constructor(properties?: foos.IGetPlayersRequest);
        public static create(properties?: foos.IGetPlayersRequest): foos.GetPlayersRequest;
        public static encode(message: foos.IGetPlayersRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.IGetPlayersRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.GetPlayersRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.GetPlayersRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.GetPlayersRequest;
        public static toObject(message: foos.GetPlayersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGetPlayersResponse {
        players?: (foos.IPlayer[]|null);
    }

    class GetPlayersResponse implements IGetPlayersResponse {
        constructor(properties?: foos.IGetPlayersResponse);
        public players: foos.IPlayer[];
        public static create(properties?: foos.IGetPlayersResponse): foos.GetPlayersResponse;
        public static encode(message: foos.IGetPlayersResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.IGetPlayersResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.GetPlayersResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.GetPlayersResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.GetPlayersResponse;
        public static toObject(message: foos.GetPlayersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IInputGameRequest {
        winners?: (string[]|null);
        losers?: (string[]|null);
        winningScore?: (number|null);
        losingScore?: (number|null);
    }

    class InputGameRequest implements IInputGameRequest {
        constructor(properties?: foos.IInputGameRequest);
        public winners: string[];
        public losers: string[];
        public winningScore: number;
        public losingScore: number;
        public static create(properties?: foos.IInputGameRequest): foos.InputGameRequest;
        public static encode(message: foos.IInputGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.IInputGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.InputGameRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.InputGameRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.InputGameRequest;
        public static toObject(message: foos.InputGameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IInputGameResponse {
    }

    class InputGameResponse implements IInputGameResponse {
        constructor(properties?: foos.IInputGameResponse);
        public static create(properties?: foos.IInputGameResponse): foos.InputGameResponse;
        public static encode(message: foos.IInputGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.IInputGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.InputGameResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.InputGameResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.InputGameResponse;
        public static toObject(message: foos.InputGameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGetGamesForPlayerRequest {
        playerId?: (string|null);
    }

    class GetGamesForPlayerRequest implements IGetGamesForPlayerRequest {
        constructor(properties?: foos.IGetGamesForPlayerRequest);
        public playerId: string;
        public static create(properties?: foos.IGetGamesForPlayerRequest): foos.GetGamesForPlayerRequest;
        public static encode(message: foos.IGetGamesForPlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.IGetGamesForPlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.GetGamesForPlayerRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.GetGamesForPlayerRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.GetGamesForPlayerRequest;
        public static toObject(message: foos.GetGamesForPlayerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGetGamesForPlayerResponse {
        games?: (foos.IGame[]|null);
    }

    class GetGamesForPlayerResponse implements IGetGamesForPlayerResponse {
        constructor(properties?: foos.IGetGamesForPlayerResponse);
        public games: foos.IGame[];
        public static create(properties?: foos.IGetGamesForPlayerResponse): foos.GetGamesForPlayerResponse;
        public static encode(message: foos.IGetGamesForPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.IGetGamesForPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.GetGamesForPlayerResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.GetGamesForPlayerResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.GetGamesForPlayerResponse;
        public static toObject(message: foos.GetGamesForPlayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICreateLeagueRequest {
        name?: (string|null);
    }

    class CreateLeagueRequest implements ICreateLeagueRequest {
        constructor(properties?: foos.ICreateLeagueRequest);
        public name: string;
        public static create(properties?: foos.ICreateLeagueRequest): foos.CreateLeagueRequest;
        public static encode(message: foos.ICreateLeagueRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.ICreateLeagueRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.CreateLeagueRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.CreateLeagueRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.CreateLeagueRequest;
        public static toObject(message: foos.CreateLeagueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICreateLeagueResponse {
        league?: (foos.ILeague|null);
    }

    class CreateLeagueResponse implements ICreateLeagueResponse {
        constructor(properties?: foos.ICreateLeagueResponse);
        public league?: (foos.ILeague|null);
        public static create(properties?: foos.ICreateLeagueResponse): foos.CreateLeagueResponse;
        public static encode(message: foos.ICreateLeagueResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.ICreateLeagueResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.CreateLeagueResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.CreateLeagueResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.CreateLeagueResponse;
        public static toObject(message: foos.CreateLeagueResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGetLeaguesRequest {
    }

    class GetLeaguesRequest implements IGetLeaguesRequest {
        constructor(properties?: foos.IGetLeaguesRequest);
        public static create(properties?: foos.IGetLeaguesRequest): foos.GetLeaguesRequest;
        public static encode(message: foos.IGetLeaguesRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.IGetLeaguesRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.GetLeaguesRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.GetLeaguesRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.GetLeaguesRequest;
        public static toObject(message: foos.GetLeaguesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGetLeaguesResponse {
        leagues?: (foos.ILeague[]|null);
    }

    class GetLeaguesResponse implements IGetLeaguesResponse {
        constructor(properties?: foos.IGetLeaguesResponse);
        public leagues: foos.ILeague[];
        public static create(properties?: foos.IGetLeaguesResponse): foos.GetLeaguesResponse;
        public static encode(message: foos.IGetLeaguesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: foos.IGetLeaguesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foos.GetLeaguesResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foos.GetLeaguesResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): foos.GetLeaguesResponse;
        public static toObject(message: foos.GetLeaguesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}
