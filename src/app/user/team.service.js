/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class TeamService {

  constructor($http, baseURL) {
    'ngInject';
    this.$http = $http;
    this.teamsURL = baseURL + 'teams/';
    this.userURL = baseURL + 'user/';
  }

  list() {
    return this.$http.get(this.userURL + 'teams');
  }

  create(team) {
    return this.$http.post(this.teamsURL, team);
  }

  update(team) {
    return this.$http.put(this.teamsURL + team.name, {description: team.description, email: team.email});
  }
}

export default TeamService;