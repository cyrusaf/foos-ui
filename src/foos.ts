
import {createTwirpRequest, throwTwirpError, Fetch} from './twirp';


export interface Player {
    id: string;
    name: string;
    rating: string;
    
}

interface PlayerJSON {
    id: string;
    name: string;
    rating: string;
    
}


const JSONToPlayer = (m: Player | PlayerJSON): Player => {
    
    return {
        id: m.id,
        name: m.name,
        rating: m.rating,
        
    };
};

export interface Game {
    
}

interface GameJSON {
    
}


const JSONToGame = (m: Game | GameJSON): Game => {
    
    return {
        
    };
};

export interface League {
    id: string;
    name: string;
    playerIds: string[];
    
}

interface LeagueJSON {
    id: string;
    name: string;
    player_ids: string[];
    
}


const JSONToLeague = (m: League | LeagueJSON): League => {
    
    return {
        id: m.id,
        name: m.name,
        playerIds: (((m as League).playerIds) ? (m as League).playerIds : (m as LeagueJSON).player_ids),
        
    };
};

export interface CreatePlayerRequest {
    name: string;
    leagueId: string;
    
}

interface CreatePlayerRequestJSON {
    name: string;
    league_id: string;
    
}


const CreatePlayerRequestToJSON = (m: CreatePlayerRequest): CreatePlayerRequestJSON => {
    return {
        name: m.name,
        league_id: m.leagueId,
        
    };
};

export interface CreatePlayerResponse {
    player: Player;
    
}

interface CreatePlayerResponseJSON {
    player: PlayerJSON;
    
}


const JSONToCreatePlayerResponse = (m: CreatePlayerResponse | CreatePlayerResponseJSON): CreatePlayerResponse => {
    
    return {
        player: JSONToPlayer(m.player),
        
    };
};

export interface GetPlayersRequest {
    
}

interface GetPlayersRequestJSON {
    
}


const GetPlayersRequestToJSON = (m: GetPlayersRequest): GetPlayersRequestJSON => {
    return {
        
    };
};

export interface GetPlayersResponse {
    players: Player[];
    
}

interface GetPlayersResponseJSON {
    players: PlayerJSON[];
    
}


const JSONToGetPlayersResponse = (m: GetPlayersResponse | GetPlayersResponseJSON): GetPlayersResponse => {
    
    return {
        players: (m.players as (Player | PlayerJSON)[]).map(JSONToPlayer),
        
    };
};

export interface InputGameRequest {
    winners: string[];
    losers: string[];
    winningScore: number;
    losingScore: number;
    
}

interface InputGameRequestJSON {
    winners: string[];
    losers: string[];
    winning_score: number;
    losing_score: number;
    
}


const InputGameRequestToJSON = (m: InputGameRequest): InputGameRequestJSON => {
    return {
        winners: m.winners,
        losers: m.losers,
        winning_score: m.winningScore,
        losing_score: m.losingScore,
        
    };
};

export interface InputGameResponse {
    
}

interface InputGameResponseJSON {
    
}


const JSONToInputGameResponse = (m: InputGameResponse | InputGameResponseJSON): InputGameResponse => {
    
    return {
        
    };
};

export interface GetGamesForPlayerRequest {
    playerId: string;
    
}

interface GetGamesForPlayerRequestJSON {
    player_id: string;
    
}


const GetGamesForPlayerRequestToJSON = (m: GetGamesForPlayerRequest): GetGamesForPlayerRequestJSON => {
    return {
        player_id: m.playerId,
        
    };
};

export interface GetGamesForPlayerResponse {
    games: Game[];
    
}

interface GetGamesForPlayerResponseJSON {
    games: GameJSON[];
    
}


const JSONToGetGamesForPlayerResponse = (m: GetGamesForPlayerResponse | GetGamesForPlayerResponseJSON): GetGamesForPlayerResponse => {
    
    return {
        games: (m.games as (Game | GameJSON)[]).map(JSONToGame),
        
    };
};

export interface CreateLeagueRequest {
    name: string;
    
}

interface CreateLeagueRequestJSON {
    name: string;
    
}


const CreateLeagueRequestToJSON = (m: CreateLeagueRequest): CreateLeagueRequestJSON => {
    return {
        name: m.name,
        
    };
};

export interface CreateLeagueResponse {
    league: League;
    
}

interface CreateLeagueResponseJSON {
    league: LeagueJSON;
    
}


const JSONToCreateLeagueResponse = (m: CreateLeagueResponse | CreateLeagueResponseJSON): CreateLeagueResponse => {
    
    return {
        league: JSONToLeague(m.league),
        
    };
};

export interface GetLeaguesRequest {
    
}

interface GetLeaguesRequestJSON {
    
}


const GetLeaguesRequestToJSON = (m: GetLeaguesRequest): GetLeaguesRequestJSON => {
    return {
        
    };
};

export interface GetLeaguesResponse {
    leagues: League[];
    
}

interface GetLeaguesResponseJSON {
    leagues: LeagueJSON[];
    
}


const JSONToGetLeaguesResponse = (m: GetLeaguesResponse | GetLeaguesResponseJSON): GetLeaguesResponse => {
    
    return {
        leagues: (m.leagues as (League | LeagueJSON)[]).map(JSONToLeague),
        
    };
};

export interface Foos {
    createPlayer: (createPlayerRequest: CreatePlayerRequest) => Promise<CreatePlayerResponse>;
    
    getPlayers: (getPlayersRequest: GetPlayersRequest) => Promise<GetPlayersResponse>;
    
    inputGame: (inputGameRequest: InputGameRequest) => Promise<InputGameResponse>;
    
    getGamesForPlayer: (getGamesForPlayerRequest: GetGamesForPlayerRequest) => Promise<GetGamesForPlayerResponse>;
    
    createLeague: (createLeagueRequest: CreateLeagueRequest) => Promise<CreateLeagueResponse>;
    
    getLeagues: (getLeaguesRequest: GetLeaguesRequest) => Promise<GetLeaguesResponse>;
    
}

export class DefaultFoos implements Foos {
    private hostname: string;
    private fetch: Fetch;
    private writeCamelCase: boolean;
    private pathPrefix = "/twirp/foos.Foos/";

    constructor(hostname: string, fetch: Fetch, writeCamelCase = false) {
        this.hostname = hostname;
        this.fetch = fetch;
        this.writeCamelCase = writeCamelCase;
    }
    createPlayer(createPlayerRequest: CreatePlayerRequest): Promise<CreatePlayerResponse> {
        const url = this.hostname + this.pathPrefix + "CreatePlayer";
        let body: CreatePlayerRequest | CreatePlayerRequestJSON = createPlayerRequest;
        if (!this.writeCamelCase) {
            body = CreatePlayerRequestToJSON(createPlayerRequest);
        }
        return this.fetch(createTwirpRequest(url, body)).then((resp) => {
            if (!resp.ok) {
                return throwTwirpError(resp);
            }

            return resp.json().then(JSONToCreatePlayerResponse);
        });
    }
    
    getPlayers(getPlayersRequest: GetPlayersRequest): Promise<GetPlayersResponse> {
        const url = this.hostname + this.pathPrefix + "GetPlayers";
        let body: GetPlayersRequest | GetPlayersRequestJSON = getPlayersRequest;
        if (!this.writeCamelCase) {
            body = GetPlayersRequestToJSON(getPlayersRequest);
        }
        return this.fetch(createTwirpRequest(url, body)).then((resp) => {
            if (!resp.ok) {
                return throwTwirpError(resp);
            }

            return resp.json().then(JSONToGetPlayersResponse);
        });
    }
    
    inputGame(inputGameRequest: InputGameRequest): Promise<InputGameResponse> {
        const url = this.hostname + this.pathPrefix + "InputGame";
        let body: InputGameRequest | InputGameRequestJSON = inputGameRequest;
        if (!this.writeCamelCase) {
            body = InputGameRequestToJSON(inputGameRequest);
        }
        return this.fetch(createTwirpRequest(url, body)).then((resp) => {
            if (!resp.ok) {
                return throwTwirpError(resp);
            }

            return resp.json().then(JSONToInputGameResponse);
        });
    }
    
    getGamesForPlayer(getGamesForPlayerRequest: GetGamesForPlayerRequest): Promise<GetGamesForPlayerResponse> {
        const url = this.hostname + this.pathPrefix + "GetGamesForPlayer";
        let body: GetGamesForPlayerRequest | GetGamesForPlayerRequestJSON = getGamesForPlayerRequest;
        if (!this.writeCamelCase) {
            body = GetGamesForPlayerRequestToJSON(getGamesForPlayerRequest);
        }
        return this.fetch(createTwirpRequest(url, body)).then((resp) => {
            if (!resp.ok) {
                return throwTwirpError(resp);
            }

            return resp.json().then(JSONToGetGamesForPlayerResponse);
        });
    }
    
    createLeague(createLeagueRequest: CreateLeagueRequest): Promise<CreateLeagueResponse> {
        const url = this.hostname + this.pathPrefix + "CreateLeague";
        let body: CreateLeagueRequest | CreateLeagueRequestJSON = createLeagueRequest;
        if (!this.writeCamelCase) {
            body = CreateLeagueRequestToJSON(createLeagueRequest);
        }
        return this.fetch(createTwirpRequest(url, body)).then((resp) => {
            if (!resp.ok) {
                return throwTwirpError(resp);
            }

            return resp.json().then(JSONToCreateLeagueResponse);
        });
    }
    
    getLeagues(getLeaguesRequest: GetLeaguesRequest): Promise<GetLeaguesResponse> {
        const url = this.hostname + this.pathPrefix + "GetLeagues";
        let body: GetLeaguesRequest | GetLeaguesRequestJSON = getLeaguesRequest;
        if (!this.writeCamelCase) {
            body = GetLeaguesRequestToJSON(getLeaguesRequest);
        }
        return this.fetch(createTwirpRequest(url, body)).then((resp) => {
            if (!resp.ok) {
                return throwTwirpError(resp);
            }

            return resp.json().then(JSONToGetLeaguesResponse);
        });
    }
    
}

