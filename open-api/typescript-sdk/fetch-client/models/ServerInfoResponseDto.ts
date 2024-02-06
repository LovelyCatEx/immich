/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ServerInfoResponseDto
 */
export interface ServerInfoResponseDto {
    /**
     * 
     * @type {string}
     * @memberof ServerInfoResponseDto
     */
    diskAvailable: string;
    /**
     * 
     * @type {number}
     * @memberof ServerInfoResponseDto
     */
    diskAvailableRaw: number;
    /**
     * 
     * @type {string}
     * @memberof ServerInfoResponseDto
     */
    diskSize: string;
    /**
     * 
     * @type {number}
     * @memberof ServerInfoResponseDto
     */
    diskSizeRaw: number;
    /**
     * 
     * @type {number}
     * @memberof ServerInfoResponseDto
     */
    diskUsagePercentage: number;
    /**
     * 
     * @type {string}
     * @memberof ServerInfoResponseDto
     */
    diskUse: string;
    /**
     * 
     * @type {number}
     * @memberof ServerInfoResponseDto
     */
    diskUseRaw: number;
}

/**
 * Check if a given object implements the ServerInfoResponseDto interface.
 */
export function instanceOfServerInfoResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "diskAvailable" in value;
    isInstance = isInstance && "diskAvailableRaw" in value;
    isInstance = isInstance && "diskSize" in value;
    isInstance = isInstance && "diskSizeRaw" in value;
    isInstance = isInstance && "diskUsagePercentage" in value;
    isInstance = isInstance && "diskUse" in value;
    isInstance = isInstance && "diskUseRaw" in value;

    return isInstance;
}

export function ServerInfoResponseDtoFromJSON(json: any): ServerInfoResponseDto {
    return ServerInfoResponseDtoFromJSONTyped(json, false);
}

export function ServerInfoResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerInfoResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'diskAvailable': json['diskAvailable'],
        'diskAvailableRaw': json['diskAvailableRaw'],
        'diskSize': json['diskSize'],
        'diskSizeRaw': json['diskSizeRaw'],
        'diskUsagePercentage': json['diskUsagePercentage'],
        'diskUse': json['diskUse'],
        'diskUseRaw': json['diskUseRaw'],
    };
}

export function ServerInfoResponseDtoToJSON(value?: ServerInfoResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'diskAvailable': value.diskAvailable,
        'diskAvailableRaw': value.diskAvailableRaw,
        'diskSize': value.diskSize,
        'diskSizeRaw': value.diskSizeRaw,
        'diskUsagePercentage': value.diskUsagePercentage,
        'diskUse': value.diskUse,
        'diskUseRaw': value.diskUseRaw,
    };
}
