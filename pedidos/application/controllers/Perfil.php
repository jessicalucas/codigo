<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Perfil extends CI_Controller {

	function __construct()
    {
        parent::__construct();
        $this->load->model('PerfilModel', 'perfil', TRUE);
		$this->load->helper('url');
    }

	public function get_perfil($id) {
		$perfis = $this->perfil->get_perfil($id);
		$response = array();
		foreach($perfis as $res){
			$user = array();
			$user["id"] = $res->id;
			$user["nameuser"] = $res->nameuser;
			$user["email"] = $res->email;
			$user["about"] = ($res->about != null ) ? $res->about : 'não informado' ;
			$user["type"] = ($res->type == '0') ? 'Doutor(a)' : 'Paciente';
			$user["name"] = $res->name;
			$user["birthday"] = $res->birthday;
			$user["cellphone"] = $res->cellphone;
			$user["photo"] = ($res->photo != null) ? $res->photo : 'Sem foto' ;
			$user["who_recommended"] = ($res->who_recommended != null) ? $res->who_recommended : 'Sem Recomendações' ;
			array_push($response, $user);
		}
		echo json_encode($response);
	}

    public function cadastrar_perfil($token){
        $msg = "";
        $request = array();
        $json = file_get_contents('php://input');
        $request = json_decode($json, true);
        $about = "";
        $who_recommended = "";
        $user_id = $token;
        $flag_update = "";
        $id = "";

        if(!empty($request))
        {
            foreach ($request as $key => $val) 
            {
                if($key == "id"){
                    $id = $val;
                }else if($key == "about"){
                    $about = $val;
                }else if($key == "who_recommended"){
                    $who_recommended = $val;
                }else if($key == "flag_update"){
                    $flag_update = $val;
                }  else {
                    $msg = "valor enviado invalido";
                }
            }

            $dados = array(
                'user_id' => $user_id,
                'about' => $about,
                'who_recommended' => $who_recommended,
            );

            $this->db->where('user_id', $user_id);
            $this->db->update('ls_user_data', $dados);
            $msg = $id."|sucesso";

        } else {
            $msg = "Erro ao enviar os dados !";
        }
        
        echo $msg;
    }

}