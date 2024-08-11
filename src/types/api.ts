export interface APISpaceXResponse {
name: string;
links: any;
success: boolean | null;
flight_number: number;
details: string;
id: any;
  readonly docs:          Doc[];
  readonly totalDocs:     number;
  readonly offset:        number;
  readonly limit:         number;
  readonly totalPages:    number;
  readonly page:          number;
  readonly pagingCounter: number;
  readonly hasPrevPage:   boolean;
  readonly hasNextPage:   boolean;
  readonly prevPage:      null;
  readonly nextPage:      number;
}

export interface Doc {
  readonly fairings:              Fairings | null;
  readonly links:                 Links;
  readonly static_fire_date_utc:  Date | null;
  readonly static_fire_date_unix: number | null;
  readonly net:                   boolean;
  readonly window:                number;
  readonly rocket:                Rocket;
  readonly success:               boolean;
  readonly failures:              Failure[];
  readonly details:               null | string;
  readonly crew:                  any[];
  readonly ships:                 string[];
  readonly capsules:              string[];
  readonly payloads:              string[];
  readonly launchpad:             Launchpad;
  readonly flight_number:         number;
  readonly name:                  string;
  readonly date_utc:              Date;
  readonly date_unix:             number;
  readonly date_local:            Date;
  readonly date_precision:        DatePrecision;
  readonly upcoming:              boolean;
  readonly cores:                 Core[];
  readonly auto_update:           boolean;
  readonly tbd:                   boolean;
  readonly launch_library_id:     null;
  readonly id:                    string;
}

export interface Core {
  readonly core:            string;
  readonly flight:          number;
  readonly gridfins:        boolean;
  readonly legs:            boolean;
  readonly reused:          boolean;
  readonly landing_attempt: boolean;
  readonly landing_success: boolean | null;
  readonly landing_type:    null | string;
  readonly landpad:         null;
}

export enum DatePrecision {
  Hour = "hour",
}

export interface Failure {
  readonly time:     number;
  readonly altitude: number | null;
  readonly reason:   string;
}

export interface Fairings {
  readonly reused:           boolean | null;
  readonly recovery_attempt: boolean | null;
  readonly recovered:        boolean | null;
  readonly ships:            any[];
}

export enum Launchpad {
  The5E9E4501F509094Ba4566F84 = "5e9e4501f509094ba4566f84",
  The5E9E4502F509092B78566F87 = "5e9e4502f509092b78566f87",
  The5E9E4502F5090995De566F86 = "5e9e4502f5090995de566f86",
}

export interface Links {
  readonly patch:      Patch;
  readonly reddit:     Reddit;
  readonly flickr:     Flickr;
  readonly presskit:   null | string;
  readonly webcast:    string;
  readonly youtube_id: string;
  readonly article:    string;
  readonly wikipedia:  string;
}

export interface Flickr {
  readonly small:    any[];
  readonly original: any[];
}

export interface Patch {
  readonly small: string;
  readonly large: string;
}

export interface Reddit {
  readonly campaign: null;
  readonly launch:   null | string;
  readonly media:    null;
  readonly recovery: null;
}

export enum Rocket {
  The5E9D0D95Eda69955F709D1Eb = "5e9d0d95eda69955f709d1eb",
  The5E9D0D95Eda69973A809D1Ec = "5e9d0d95eda69973a809d1ec",
}
