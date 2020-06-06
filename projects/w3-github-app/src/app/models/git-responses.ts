// tslint:disable: variable-name

import { GitUser } from './git-user';

export class GitUsersResponse {
    total_count: number;
    incomplete_results: boolean;
    items: GitUser[];
}


